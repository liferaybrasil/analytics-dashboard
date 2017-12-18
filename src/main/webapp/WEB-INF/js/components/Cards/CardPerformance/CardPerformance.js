import JSXComponent from 'metal-jsx';
import debounce from 'metal-debounce';
import dom from 'metal-dom';
import {EventHandler} from 'metal-events';
import {CardText, CardIcon, CardNumber, CardInfo} from './../components';
import {Button} from './../../../components';
import position from 'metal-position';

import './../Cards.scss';
import './CardPerformance.scss';

class SVGPolygon extends JSXComponent {
	render() {
		const {
			props: {
				points,
				color,
				duration
			}
		} = this;

		return (
			<svg width="100%" height="100%">
				<polygon fill={color} points={points}></polygon>
			</svg>
		);
	}
}

class CardPerformanceItem extends JSXComponent {

	created() {
		this.eventHandler_ = new EventHandler();
	}

	attached() {
		setTimeout(() => this.setSizeElement(), 0);

		this.eventHandler_.add(
			dom.on(
				window, 
				'resize', 
				debounce(this.handleWindowResize_.bind(this), 0)
			)
		);
	}

	detached() {
		this.eventHandler_.removeAllListeners();
	}

	handleWindowResize_() {
		this.setSizeElement();
	}

	getElement_() {
		return this.element.querySelector('.card-dashboard__section-content');
	}

	setSizeElement() {
		const element = this.state.element;
		const width = position.getClientWidth(element);
		const height = position.getClientHeight(element);

		this.setState({
			elementWidth: width,
			elementHeight: height
		});
	}

	getCalcHeight(totalValue, currentValue) {
		//Convert current value to percent based on total value
		const currentValuePercent = (currentValue * 100) / totalValue;

		//Convert the current value percent to height based on height of element
		const percentualHeight = ((this.state.elementHeight * currentValuePercent) / 100) - this.state.elementHeight;

		//Return the inverse height to stay visually right 
		//because the {x,y} svg is inverted by default
		return percentualHeight * (-1);
	}

	renderSVGPolygon(totalValue, currentValue, nextValue) {
		const width = this.state.elementWidth;
		const height = this.state.elementHeight;

		const p1 = { x: 0, y: this.getCalcHeight(totalValue, currentValue) };
		const p2 = { x: width, y: this.getCalcHeight(totalValue, nextValue) };
		const p3 = { x: width, y: height };
		const p4 = { x: 0, y: height };

		return (
			<SVGPolygon 
				points={`${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}, ${p4.x} ${p4.y}`}
				color="rgba(0, 0, 0, 0.1)"
			/>
		);
	} 

	renderItem(item, icon) {
		if(!item) {
			return;
		}

		const {
			props: {
				classDefault
			}
		} = this;

		return (
			<div class={`${classDefault}__flex-between-horizontal`}>
				<div>
					<CardIcon size="xs" icon={icon} />
					<CardText size="xs" text={` ${item.value} sec`} />
				</div>
				<div class={`${!item.warning ? 'hide' : ''} ${classDefault}__flex-center`}>
					<CardIcon size="sm" icon="warning" />
				</div>
			</div>
		);
	}

	render() {
		const {
			props: {
				classDefault,
				title,
				description,
				name,
				time,
				reload,
				page,
				totalValue,
				currentValue,
				nextValue,
				dropOff
			}
		} = this;

		return (
			<section class="card-dashboard__section">
				<CardText 
					size="xs"
					className={`${classDefault}__title`}
					text={name}
				/>
				<div class={`${classDefault}__section-content`}>
					<div class={`${classDefault}__chart-percent`}>
						{this.renderSVGPolygon(totalValue, currentValue, nextValue)}
					</div>

					<div class={`${classDefault}__flex-between-vertical`}>
						<div>
							<div class="margin-bottom-half">
								<CardText size="sm" weight="700" text={currentValue} />
								<CardText size="sm" text={` ${title}`} />
							</div>
							<div class={`${!description ? 'hide' : ''} margin-bottom-half`}>
								<CardText size="xs" text={` ${description}`} />
							</div>
							{this.renderItem(time, 'time')}
							{this.renderItem(reload, 'reload')}
							{this.renderItem(page, 'page')}
						</div>
						<div>
							<CardText size="xs" text="Dropoff " />
							<CardText size="xs" weight="700" text={`${dropOff.percent}%`} />
							<CardText size="xs" text={` (${dropOff.total})`} />
						</div>
					</div>
				</div>

				<Button iconSymbol="order-arrow-down" style="default" />
			</section>
		);
	}
}

CardPerformanceItem.STATE = {
	element: {
		value: '',
		setter: 'getElement_'
	},
	elementWidth: {
		value: 0,
	},
	elementHeight: {
		value: 0,
	}
}

class CardPerformance extends JSXComponent {

	getNextFieldValue(fields, index) {
		if(!fields[index + 1]) {
			return 0;
		}

		return fields[index + 1].total;
	}

	renderFields() {
		const {
			props: { 
				data: { 
					fields,
					total
				}
			},
			state: {
				classDefault
			}
		} = this;

		return [].map.call(fields, (field, index) => {
			return (
				<CardPerformanceItem 
				classDefault={classDefault} 
					title="interactions"
					name={field.name}
					time={field.time}
					reload={field.reload}
					page={field.page}
					totalValue={total} 
					currentValue={field.total}
					nextValue={(this.getNextFieldValue(fields, index))}
					dropOff={field.dropOff}
				/>
			);
		});
	}
	
	render() {
		const {
			props: {
				title,
				data: {
					name,
					visitors,
					percent,
					time,
					total,
					fields,
					dropOff
				}
			},
			state: {
				classDefault
			}
		} = this;

		return (
			<div class="card-dashboard card-dashboard--performance">
				
				<div class="margin-bottom">
					<CardText 
						size="sm"
						weight="700"
						className={`${classDefault}__title`} 
						text={title} 
					/>
				</div>

				<div class="card-dashboard__content">

					<CardPerformanceItem 
						classDefault={classDefault} 
						title="Sessions"
						description={
							`${visitors} visitors (${dropOff.percent}%) left 
							the first page without interacting to it.`
						}
						name={name}
						totalValue={total} 
						currentValue={total}
						nextValue={fields[0].total} 
						dropOff={dropOff}
					/>

					{this.renderFields(fields)}
				</div>
			</div>
		);
	}
}

CardPerformance.STATE = {
	classDefault: {
		value: 'card-dashboard'
    },
    classSpecific: {
		value: `card-dashboard--performance`
	}
}

export default CardPerformance;
