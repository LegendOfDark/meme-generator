function Todo(props){
    // console.log("props are ", props)
    const styles = {
        fontFamily: "Cursive",
        padding: 30,
        backgroundColor: "lightblue",
        margin: 2,
        fontSize: "1.5em"
    }

    const completed_style = {
        textDecoration: "line-through",
        backgroundColor: "grey"
    }

    let p_style = {
        display: "inline"
    }
    return(
        <div className="div_styles" style={props.item.completed ? completed_style : null}>
            <input 
            onChange={() => props.handleChange(props.id)} 
            type="checkbox" 
            checked={props.item.completed}
            />
            
            <p style={p_style}>  {props.item.text}</p>
        
        </div>
    );
}

export default Todo