const ThemeContext = React.createContext('light');
const userContext = React.createContext({
    name: 'Guest',
});

class App extends React.Component{
    render() {
        const {siiiignedInUser, theme} = this.props;

        return(
            <ThemeContext.Provider value={theme}>
                <userContext.Provider value={signedInUser}>
                    <Layout />
                </userContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout(){
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}

function Content(){
    return (
        <ThemeContext.Consumer>
            {theme => (
                <userContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </userContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}
