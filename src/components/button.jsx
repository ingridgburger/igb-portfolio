import './button.css';

export default function Button({
	as: Component = 'button',
	children,
	icon,
	iconPosition = 'left',
	arrow = false,
	className = '',
	...props
}) {
	const buttonClassName = ['button', arrow && 'button--arrow', className].filter(Boolean).join(' ');
	const iconElement = icon ? (
		<span className="button__icon" aria-hidden="true">
			{icon}
		</span>
	) : null;

	return (
		<Component className={buttonClassName} {...props}>
			{iconPosition === 'left' && iconElement}
			<span className="button__label">{children}</span>
			{iconPosition === 'right' && iconElement}
			{arrow && <span className="button__arrow" aria-hidden="true">→</span>}
		</Component>
	);
}
