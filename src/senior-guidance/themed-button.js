import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render(){
        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{backgroundColor: theme.background}}
            />
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;

function ThemeToggleButton(){
    return(
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeToggleButton;