import React, {Fragment } from 'react';

<input 
    type="text"
    aria-label={labelText}
    aria-required="true"
    onChange={onchangehandle}
    value={inputValue}
    name="name"
/>

function ListItem({item}){
    return (
        <Fragment>
            {/* <> */}
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
            {/* </> */}
        </Fragment>
    );
}

function Glossary(){
    return(
        <dl>
            {props.items.map(item => (
                //<ListItem item={item} key={item.id} />
                //Fragment should also have a 'key' prop when mapping collections
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}

{/* <label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name= /> */}