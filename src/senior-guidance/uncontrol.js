class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input defaultValue="Blob" type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


class FileInput extends React.Comonent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handlSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return (
            <form onSubmit={thiss.handleSubmit}>
                <label>Upload file: <input type="file" ref={this.fileInput} /></label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

