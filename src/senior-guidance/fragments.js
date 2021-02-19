class Table extends React.Component {
    render(){
        return(
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        )
    }
}

//div 无效
class Columns extends React.Component {
    render(){
        return(
            <div>
                <td>Hello</td>
                <td>World</td>
            </div>
        )
    }
}

{/* <table><tr><div><td>Hello</td><td>World</td></div></tr></table> */}

class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* <> */}
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
            // </>
        )
    }
}

{/* <table><tr><td>Hello</td><td>World</td></tr></table> */}

function Glossary(props){
    return(
        <dl>
            {props.items.map(item => (
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    )
}
