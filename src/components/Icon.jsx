export const Icon = props => {
    return (
        <i
            onClick={props.onClick}
            className={`text-cyan-800/50  ${props.icon} ${props.onClick ? 'cursor-pointer hover:text-cyan-900' : ''} ${
                props.className || ''
            }`}
        >
            {props.children}
        </i>
    )
}
