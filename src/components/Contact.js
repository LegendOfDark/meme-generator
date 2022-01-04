function Contact(props) {
    const styles = {
        fontFamily: "Cursive",
        padding: 30,
        backgroundColor: "lightblue",
        marginLeft: "30vw",
        marginRight: "30vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        fontSize: "1.5em"
    }

    const img_style = {
        width: "20vw",
        height: "30vh",
        objectFit: "cover"
    }

    return(
        <div style={{paddingTop: 30, paddingBottom: 30}}>
            <div style={styles}>
            <img style={img_style} src={props.contact["imgUrl"]}/>
            <h3>{props.contact["name"]}</h3>
            <p>Phone: {props.contact["phone_number"]}</p>
            <p>Email: {props.contact["email"]}</p>    
            </div>
        </div>
    );
}


// <Contact
//         contact = {{name: "Join Jamal", imgUrl:"https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg", phone_number: "(647)-234-2342", email:"ere@apple.com"}}
//         />
//         <Contact
//         contact = {{name: "Joseph Stalin", imgUrl:"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprodmigration%2Fweb%2Fbin%2Fdf8466b9-70e2-3ab8-af67-cbc46fdcc6b9.jpg?crop=780%2C520%2C0%2C0", phone_number: "(416)-238-2321", email:"stalin@death.com"}}
//         />
//         <Contact
//         contact = {{name: "Marium Bhai", imgUrl:"data:image/jpeg;base64,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", phone_number: "(342)-234-4323", email:"marium@annoying.com"}}
//         />
//         <Contact
//         contact = {{name: "Fato Bhai", imgUrl:"https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.15752-9/202370891_2635728803399911_5144914138220007218_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-rKirXYAVzgAX934SDQ&tn=R6PGT9pjv2KxsGZF&_nc_ht=scontent.fyyz1-2.fna&oh=03_AVKQ0Y_oOs39U2bU6HlNbVddky0jzgmg5qO8lMHJGaTGHQ&oe=61EE36C1", phone_number: "(416)-444-2323", email:"fati@pp.com"}}  />

export default Contact