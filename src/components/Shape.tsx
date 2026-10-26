/** Три базовые формы конструктивизма как знаки направлений. Нарисованы SVG, цвет наследуется от currentColor. */
export type ShapeKind = 'circle' | 'square' | 'triangle' | 'bar';

export default function Shape({
    kind,
    className,
}: {
    kind: ShapeKind;
    className?: string;
}) {
    return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
            {kind === 'circle' && <circle cx="50" cy="50" r="46" fill="currentColor" />}
            {kind === 'square' && <rect x="6" y="6" width="88" height="88" fill="currentColor" />}
            {kind === 'triangle' && <path d="M50 6 L96 94 H4 Z" fill="currentColor" />}
            {kind === 'bar' && <path d="M0 58 L100 30 V58 L0 86 Z" fill="currentColor" />}
        </svg>
    );
}
