export const DropIndicator = ({indicatorId}) => {
    return (
        <div
            id={indicatorId || '-1'}
            className="my-0.5 h-0.5 w-full bg-yellow-600 opacity-0 rounded-lg cursor-grab">
        </div>
    )
}
