export const Button = props => {
    return (
        <button
            type="button"
            className={`border border-cyan-800/50 text-cyan-800/50 cursor-pointer hover:text-cyan-900 rounded-full px-4 py-1 ${
                props.className || ''
            }`}
        >
            {props.title}
        </button>
    )
}
