import "./styles.css"
import P from 'prop-types'

export const Button = ({ text, onClick, disabled}) => (
    <button
        className="button"
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </button>
);

Button.defaultProps = {
    disable: false,
};

Button.propTypes = {
    text: P.string.isRequired,
    onCLick: P.func.isRequired,
    disabled: P.bool,
}