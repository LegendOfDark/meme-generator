import React from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import html2canvas from 'html2canvas'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            hrefVal: "",
            error: false,
            meme: "Hello",
            topText: "Create memes",
            bottomText: "24 hrs a day",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.anchorRef = React.createRef();
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        const { name, value, type } = e.target
        type === "text" ?
            this.setState({
                [name]: value
            })
            :
            this.setState((state) => {
                const item = state.allMemeImgs.filter((item) => {
                    return value === item.name
                }
                )
                console.log(item[0].url)
                return {
                    [name]: value,
                    randomImg: item[0].url
                }
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        html2canvas(
            document.querySelector(".meme"),
            { allowTaint: true, useCORS: true }
        )
            .then(canvas => {
                this.setState({
                    hrefVal: canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
                });
                // 2 downloading
                this.anchorRef.current.click();
            })
    }


    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes)
                this.setState({ allMemeImgs: memes })
            })
            .catch(() => this.setState({ error: true }))
    }

    render() {
        const meme_arr = this.state.allMemeImgs.map((img) => {
            return <MenuItem key={this.state.allMemeImgs.indexOf(img)} url={img.url} value={img.name}>{img.name}</MenuItem>
        })
        return (
            <div>
                {
                    this.state.error &&
                    <Collapse in={this.state.error}>
                        <Alert severity="error">Error loading Image - Reload Page</Alert>
                    </Collapse>
                }
                <form >
                    <Box sx={{ display: 'flex', alignContent: 'center', p: 3, justifyContent: 'space-around', width: "100%" }}>
                        <TextField
                            color="secondary"
                            // sx ={{backgroundImage: "linear-gradient(to right, black, white)"}}
                            type="text"
                            name="topText"
                            label="Top Text"
                            value={this.state.topText}
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            color="secondary"
                            type="text"
                            name="bottomText"
                            label="Bottom Text"
                            value={this.state.bottomText}
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', p: 1, m: 1, justifyContent: 'center' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-effect">Meme</InputLabel>
                            <Select
                                id="demo-simple-select"
                                value={this.state.meme}
                                name="meme"
                                variant="outlined"
                                label="Meme"
                                onChange={this.handleChange}
                            >
                                <MenuItem disabled>Choose Here</MenuItem>
                                {meme_arr}
                            </Select>
                        </FormControl>

                    </Box>

                </form>
                <div className="meme">
                    <img crossOrigin="anonymous" className="meme--image" src={this.state.randomImg} alt="meme display" />
                    <h2 className="meme--text top">{this.state.topText}</h2>
                    <h2 className="meme--text bottom">{this.state.bottomText}</h2>
                </div>
                <a ref={this.anchorRef} style={{ display: 'none' }} href={this.state.hrefVal} download="meme.png">Generate</a>
                <Box sx={{ display: 'flex', p: 1, m: 1, justifyContent: 'center' }}>
                    <Button onClick={(e) => this.handleSubmit(e)} variant="contained">Generate</Button>
                </Box>
            </div>
        )
    }
}

export default MemeGenerator