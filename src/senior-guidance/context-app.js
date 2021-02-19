import {ThemeContext, themes} from './theme-context';
import {ThemedButton, ThemeToggleButton} from './themed-button';

function Toolbar(props){
    return(
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
        this.toggleTheme = () => {
            this.setState(state =>({
                theme: state.theme === themes.dark? themes.light : themes.dark,
            }));
        };
    }

    render(){
       return (
           <Page>
               <ThemeContext.Provider value={this.state.theme}>
                   {/* <Toolbar changeTheme={this.toggleTheme} /> */}
                    <Content />
               </ThemeContext.Provider>
               {/* <Section>
                    <ThemedButton />
                </Section> */}
            </Page>
       )
    }
}

function Content(){
    return (
        <div>
            <ThemeToggleButton />
        </div>
    )
}