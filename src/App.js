// App.js for Timetable Generator

// IMPORTS
import React, { Component } from 'react';
import './App.css';

import 'typeface-roboto'

import Typography from 'material-ui/Typography'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import AddIcon from 'material-ui-icons/Add';
import CodeIcon from 'material-ui-icons/Code';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import yellow from 'material-ui/colors/yellow';
import red from 'material-ui/colors/red';
import orange from 'material-ui/colors/orange';

import { SketchPicker, SliderPicker } from 'react-color';


// MUI theme
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: yellow,
        secondary: orange,
        error: red,
    }
});


class App extends Component {

    getInitialState() {
        var data = JSON.parse(localStorage.getItem("data"));
        return data;
    }


    // State stores all the data that will be used to format and generate the timetable
    state = {
        departments: [
            "Department of Aerospace Engineering",
            "Department of Biotechnology",
            "Department of Chemical Engineering",
            "Department of Civil Engineering",
            "Department of Computer Science and Engineering",
            "Department of Electrical and Electronics Engineering",
            "Department of Electronics and Communication Engineering",
            "Department of Electronics and Instrumentation Engineering",
            "Department of Industrial Engineering and Management",
            "Department of Information Science and Engineering",
            "Department of Mechanical Engineering",
            "Department of Telecommunication Engineering",
        ],
        selectedDepartment: "none",
        semesters: [
            "I", "II", "III", "IV", "V", "VI", "VII", "VIII"
        ],
        selectedSemester: 1,
        sections: [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"
        ],
        year: "2018",
        selectedSection: "A",
        numSubjects: 2,
        subjects: [
            {name:"", code:"", bgcolor:"", fgcolor:"", displayColorPicker: false},
            {name:"", code:"", bgcolor:"", fgcolor:"", displayColorPicker: false}
        ],
        labs: [
            {name: "lab1", batch1: "", batch2: "", batch3: "", bgcolor:"", fgcolor:""}
        ],
        numLabs: 1,
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        schedule: [
            {hour1: "", hour2: "", hour3: "", hour4: "", hour5: "", hour6: ""},
            {hour1: "", hour2: "", hour3: "", hour4: "", hour5: "", hour6: ""},
            {hour1: "", hour2: "", hour3: "", hour4: "", hour5: "", hour6: ""},
            {hour1: "", hour2: "", hour3: "", hour4: "", hour5: "", hour6: ""},
            {hour1: "", hour2: "", hour3: "", hour4: "", hour5: "", hour6: ""}
        ]
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleYear(event) {
        var temp = event.target.value;
        this.setState({year: temp});
    }

    handleSubName(i, event) {
        var temp = this.state.subjects;
        temp[i].name = event.target.value;
        this.setState({subjects: temp});
    }

    handleSubCode(i, event) {
        var temp = this.state.subjects;
        temp[i].code = event.target.value;
        this.setState({subjects: temp});
    }

    handleSubBGcolor(i, color) {
        var temp = this.state.subjects;
        temp[i].bgcolor = color.hex;
        console.log(color.hex);
        this.setState({subjects: temp});
    }

    handleLabBGcolor(i, color) {
        var temp = this.state.labs;
        temp[i].bgcolor = color.hex;
        this.setState({labs: temp});
    }

    handleSubFGcolor(i, event) {
        var temp = this.state.subjects;
        temp[i].fgcolor = event.target.value;
        this.setState({subjects: temp});
    }

    handleLabFGcolor(i, event) {
        var temp = this.state.labs;
        temp[i].fgcolor = event.target.value;
        this.setState({labs: temp});
    }

    handleLabBatch1(i, event) {
        var temp = this.state.labs;
        temp[i].batch1 = event.target.value;
        this.setState({labs: temp});
    }

    handleLabBatch2(i, event) {
        var temp = this.state.labs;
        temp[i].batch2 = event.target.value;
        this.setState({labs: temp});
    }

    handleLabBatch3(i, event) {
        var temp = this.state.labs;
        temp[i].batch3 = event.target.value;
        this.setState({labs: temp});
    }

    handleHour1(i, event) {
        var temp = this.state.schedule;
        temp[i].hour1 = event.target.value;
        if (temp[i].hour2.substr(0, 3) === "lab") {
            temp[i].hour2 = "";
        }
        if (event.target.value.substr(0, 3) === "lab") {
            temp[i].hour2 = event.target.value;
        }
        this.setState({schedule: temp});
    }

    handleHour2(i, event) {
        var temp = this.state.schedule;
        temp[i].hour2 = event.target.value;
        if (temp[i].hour1.substr(0, 3) === "lab") {
            temp[i].hour1 = "";
        }
        if (event.target.value.substr(0, 3) === "lab") {
            temp[i].hour1 = event.target.value;
        }
        this.setState({schedule: temp});
    }

    handleHour3(i, event) {
        var temp = this.state.schedule;
        temp[i].hour3 = event.target.value;
        if (temp[i].hour4.substr(0, 3) === "lab") {
            temp[i].hour4 = "";
        }
        if (event.target.value.substr(0, 3) === "lab") {
            temp[i].hour4 = event.target.value;
        }
        this.setState({schedule: temp});
    }

    handleHour4(i, event) {
        var temp = this.state.schedule;
        temp[i].hour4 = event.target.value;
        if (temp[i].hour3.substr(0, 3) === "lab") {
            temp[i].hour3 = "";
        }
        if (event.target.value.substr(0, 3) === "lab") {
            temp[i].hour3 = event.target.value;
        }
        this.setState({schedule: temp});
    }

    handleHour5(i, event) {
        var temp = this.state.schedule;
        temp[i].hour5 = event.target.value;
        if (temp[i].hour6.substr(0, 3) === "lab") {
            temp[i].hour6 = "";
        }
        if (event.target.value.substr(0, 3) === "lab") {
            temp[i].hour6 = event.target.value;
        }
        this.setState({schedule: temp});
    }

    handleHour6(i, event) {
        var temp = this.state.schedule;
        temp[i].hour6 = event.target.value;
        if (temp[i].hour5.substr(0, 3) === "lab") {
            temp[i].hour5 = "";
        }
        if (event.target.value.substr(0, 3) === "lab") {
            temp[i].hour5 = event.target.value;
        }
        this.setState({schedule: temp});
    }

    handleSubjectsButton = event => {
        // this.setState({numSubjects: parseInt(this.state.numSubjects) + 1});
        // console.log(this.state.numSubjects);
        var arr = this.state.subjects.slice();
        console.log(arr);
        arr.push({name:"", code:"", bgcolor:"", fgcolor:"", displayColorPicker: false});
        console.log(arr);
        this.setState({ subjects: arr });
    }

    handleLabsButton = event => {
        // this.setState({numLabs: parseInt(this.state.numLabs) + 1});
        // console.log(this.state.numLabs);
        var arr = this.state.labs.slice();
        console.log(arr);
        arr.push({name: "lab" + (parseInt(this.state.labs.length) + 1), batch1: "", batch2: "", batch3: "", bgcolor:"", fgcolor:""});
        console.log(arr);
        this.setState({ labs: arr });
    }

    // Save the state to localStorage
    save = event => {
        localStorage.setItem("data", JSON.stringify(this.state));
    }
    // Save the state to localStorage and forward to the required page for generating timetable
    saveAndSubmit = event => {
        localStorage.setItem("data", JSON.stringify(this.state));
        window.location.href = "./template.html";
    }
    // Load the data from localStorage back into the React state
    // I don't know if all the state variables can be updated at once instead of doing it one-by-one here
    load = event => {
        var data = JSON.parse(localStorage.getItem("data"));
        //console.log(data);
        this.setState({selectedDepartment: data.selectedDepartment});
        this.setState({selectedSemester: data.selectedSemester});
        this.setState({selectedSection: data.selectedSection});
        this.setState({numSubjects: data.numSubjects});
        this.setState({subjects: data.subjects});
        this.setState({labs: data.labs});
        this.setState({days: data.days});
        this.setState({schedule: data.schedule});
    }

    // Render function returns the entire page/app
    render() {

        return (
            // Theme provider applies the theme to the entire page
            <MuiThemeProvider theme={theme}>
            <div>
                {/*
                    Header
                */}
                <div className="blockColor"></div>
                <header className="header">
                    <Typography type="display2" style={{color: 'black'}} gutterBottom>Timetable Generator</Typography>
                    <div className="line"></div>
                    <Typography type="body2" style={{color: 'black', marginTop: '1em'}}>Create customized colourful timetables</Typography>
                </header>

                {/* This section contains the body */}
                <section className="container">

                    {/* Info */}
                    <Paper style={{padding: 40, marginTop: 20}}>
                        <Typography type="display1" color="primary" style={{marginBottom: '1em', textAlign: 'center'}}>About</Typography>
                        <Typography type="body1">
                            Timetable generator allows you to create customized colourful RVCE timetables such as <a style={{color: 'yellow'}} href="./sample.png" >these</a> easily. (Beacuse the plain balck and white ones are horrible)<br />
                            I used to make these timetables manually, but this tool allows anyone to make one with their choice of colours and subjects/electives.<br />
                            Feedback about any bugs and suggestions for improvements is appreciated.<br />
                        </Typography>

                        <Typography type="headline" color="primary" style={{marginTop: '2em', marginBottom: '1em', textAlign: 'center'}}>How To Use</Typography>
                        <Typography type="body1">
                            1. Fill in the basic Details <br />
                            2. Enter your subjects <br />
                            3. Enter your labs <br />
                            4. Enter the timetable schedule <br />
                            5. Generate the timetable and save the image which is shown (right click) [reloading the page might be necessary sometimes] <bbr />
                            You can go back and press 'Load' to reload the previously entered fields to make changes.<br />
                            The 'Save' button saves the current fields so that you can resume later.
                        </Typography>
                        <br /><br />
                        <Typography type="headline" color="primary" style={{marginBottom: '1em', textAlign: 'center'}}>Notes</Typography>
                        <Typography type="body1">
                            <Typography color="primary">Timetable generator uses the <i>CSS Grid</i> specification which is supported only by the latest desktop browsers. (<a style={{color: 'yellow'}} href="https://caniuse.com/#feat=css-grid" >Ref</a>)</Typography>
                            The latest versions of Chrome, Firefox, Safari (MacOS El Capitan) and Edge (Windows 10 Fall Creators Update) support CSS Grid.
                            Your mileage may vary with mobile browsers.
                            <br />NOTE: There is an issue with Edge on Windows 10 April 2018 Update. Use Chrome/Firefox.
                            <br /><br />
                            Stuff which I might improve/add in the future: user interface, better colour picker, better fonts and timetable layout, provide starting templates which can then be modified
                        </Typography>
                    </Paper>

                    <Grid container align="center" spacing={8} style={{padding: 10}}>
                        <Grid item align="center" xs={12}>
                            <Button raised color="primary" style={{margin: '1em'}} onClick={this.save}>Save</Button>
                            <Button raised color="primary" style={{margin: '1em'}} onClick={this.load}>Load</Button>
                        </Grid>
                    </Grid>

                    {/* Basic Details Section */}
                    <Paper style={{padding: 40, marginBottom: 40}}>
                        <Typography type="display1" color="primary" style={{marginBottom: '1em', textAlign: 'center'}}>Basic Details</Typography>
                        <Grid container spacing={40}>

                            <Grid item xs={12}>
                                <FormControl style={{ width: '100%' }}>
                                    <InputLabel className="" htmlFor="dept">Department</InputLabel>
                                    <Select
                                    value={this.state.selectedDepartment}
                                    onChange={this.handleChange}
                                    input={<Input name="selectedDepartment" id="dept" />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            this.state.departments.map((department, i) =>
                                            <MenuItem value={department}>{department}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl style={{ width: '100%' }}>
                                    <InputLabel htmlFor="semester">Semester</InputLabel>
                                    <Select value={this.state.selectedSemester} onChange={this.handleChange} input={<Input name="selectedSemester" id="semester" />}>
                                        {
                                            this.state.semesters.map((sem, i) =>
                                            <MenuItem value={sem}>{sem}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl style={{ width: '100%' }}>
                                    <InputLabel htmlFor="section">Section</InputLabel>
                                    <Select value={this.state.selectedSection} onChange={this.handleChange} input={<Input name="selectedSection" id="section" />}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            this.state.sections.map((section, i) =>
                                            <MenuItem value={section}>{section}</MenuItem>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="Current Acedemic Year"
                                    value={this.state.year}
                                    onChange={this.handleYear.bind(this)}
                                    margin="normal"
                                    style={{ width: '100%' }}
                                    placeholder="Current Academic year"
                                />
                                {/* <p style={{ color: '#fff' }}>{parseInt(this.state.year) + 1}</p> */}
                            </Grid>
                            <Grid item xs={6}>
                                <p style={{ color: '#fff', 'font-size': '0.75rem'  }}>Academic Year</p>
                                <p style={{ color: '#fff' }}>{this.state.year} - {parseInt(this.state.year) + 1}</p>
                            </Grid>
                        </Grid>
                    </Paper>


                    {/* Subject Details Section */}
                    <Paper style={{marginBottom:40, padding: 40}}>
                        <Typography type="display1" color="primary" style={{textAlign: 'center'}}>Subject Details</Typography>

                            {this.state.subjects.map((subject, i) =>
                            <Grid container spacing={16} style={{ paddingTop: '4em'}}>
                                <Grid item xs={12} align="center">
                                    <Typography type="title" color="primary" style={{ textAlign: 'center'}}>Subject {i+1}</Typography>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        label="Full Subject Name"
                                        value={subject.name}
                                        onChange={this.handleSubName.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="full subject name (Ex: Programming in C)"
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        label="Subject Short Name / Acronym"
                                        value={subject.code}
                                        onChange={this.handleSubCode.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="short code (Ex: PIC)"
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    {/* <TextField
                                        label="Background Colour"
                                        value={subject.bgcolor}
                                        onChange={this.handleSubBGcolor.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="hex value (Ex: #33ffcc)"
                                    /> */}
                                    <Typography type="body1" style={{ textAlign: 'center'}}>Background Colour</Typography>
                                    <SketchPicker
                                        color={ subject.bgcolor }
                                        onChangeComplete={ this.handleSubBGcolor.bind(this, i) }
                                    />

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>Text Colour</InputLabel>
                                        <Select value={subject.fgcolor} onChange={this.handleSubFGcolor.bind(this, i)} input={<Input />} >
                                            <MenuItem value="#000000">Black</MenuItem>
                                            <MenuItem value="#ffffff">White</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField
                                        label="Text Colour"
                                        value={subject.fgcolor}
                                        onChange={this.handleSubFGcolor.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                    /> */}
                                </Grid>
                            </Grid>
                            )}

                            <Grid container spacing={16} style={{ paddingTop: '1em'}}>
                                <Grid item align="center" xs={12}>
                                    <Button fab color="primary" onClick={this.handleSubjectsButton}><AddIcon /></Button>
                                </Grid>
                            </Grid>
                    </Paper>


                    {/* Lab Details Section */}
                    <Paper style={{marginBottom:40, padding: 40}}>
                        <Typography type="display1" color="primary" style={{textAlign: 'center'}}>Lab Details</Typography>

                            {this.state.labs.map((lab, i) =>
                            <Grid container spacing={16} style={{ paddingTop: '4em'}}>
                                <Grid item xs={12} align="center">
                                    <Typography type="title" color="primary" style={{ textAlign: 'center'}}>Lab {i+1}</Typography>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        label="Lab Batch 1"
                                        value={lab.batch1}
                                        onChange={this.handleLabBatch1.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="Ex: PIC Lab"
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        label="Lab Batch 2"
                                        value={lab.batch2}
                                        onChange={this.handleLabBatch2.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="Ex: PIC Lab"
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        label="Lab Batch 3"
                                        value={lab.batch3}
                                        onChange={this.handleLabBatch3.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="Ex: PIC Lab"
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    {/* <TextField
                                        label="Background Colour"
                                        value={lab.bgcolor}
                                        onChange={this.handleLabBGcolor.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                        placeholder="hex value (Ex: #33ffcc)"
                                    /> */}
                                    <Typography type="body1" style={{ textAlign: 'center'}}>Background Colour</Typography>
                                    <SketchPicker
                                        color={ lab.bgcolor }
                                        onChangeComplete={ this.handleLabBGcolor.bind(this, i) }
                                    />
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>Text Colour</InputLabel>
                                        <Select value={lab.fgcolor} onChange={this.handleLabFGcolor.bind(this, i)} input={<Input />} >
                                            <MenuItem value="#000000">Black</MenuItem>
                                            <MenuItem value="#ffffff">White</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField
                                        label="Text Colour"
                                        value={subject.fgcolor}
                                        onChange={this.handleSubFGcolor.bind(this, i)}
                                        margin="normal"
                                        style={{ width: '100%' }}
                                    /> */}
                                </Grid>
                            </Grid>
                            )}

                            <Grid container spacing={16} style={{ paddingTop: '1em'}}>
                                <Grid item align="center" xs={12}>
                                    <Button fab color="primary" onClick={this.handleLabsButton}><AddIcon /></Button>
                                </Grid>
                            </Grid>
                    </Paper>


                    {/* Schedule Section */}
                    <Paper style={{marginBottom:40, padding: 40}}>
                        <Typography type="display1" color="primary" style={{textAlign: 'center'}}>Schedule</Typography>

                            {this.state.days.map((day, i) =>
                            <Grid container spacing={16} style={{ paddingTop: '4em'}}>
                                <Grid item xs={12} align="center">
                                    <Typography type="title" color="primary" style={{ textAlign: 'center'}}>{day}</Typography>
                                </Grid>

                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>1st Hour</InputLabel>
                                        <Select value={this.state.schedule[i].hour1} onChange={this.handleHour1.bind(this, i)} input={<Input />} >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.subjects.map((subject, i) =>
                                                <MenuItem value={subject.code}>{subject.code}</MenuItem>)
                                            }
                                            {
                                                this.state.labs.map((lab, i) =>
                                                <MenuItem value={"lab" + (i+1)}>Lab {i+1}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>2nd Hour</InputLabel>
                                        <Select value={this.state.schedule[i].hour2} onChange={this.handleHour2.bind(this, i)} input={<Input />} >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.subjects.map((subject, i) =>
                                                <MenuItem value={subject.code}>{subject.code}</MenuItem>)
                                            }
                                            {
                                                this.state.labs.map((lab, i) =>
                                                <MenuItem value={"lab" + (i+1)}>Lab {i+1}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>3rd Hour</InputLabel>
                                        <Select value={this.state.schedule[i].hour3} onChange={this.handleHour3.bind(this, i)} input={<Input />} >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.subjects.map((subject, i) =>
                                                <MenuItem value={subject.code}>{subject.code}</MenuItem>)
                                            }
                                            {
                                                this.state.labs.map((lab, i) =>
                                                <MenuItem value={"lab" + (i+1)}>Lab {i+1}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>4th Hour</InputLabel>
                                        <Select value={this.state.schedule[i].hour4} onChange={this.handleHour4.bind(this, i)} input={<Input />} >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.subjects.map((subject, i) =>
                                                <MenuItem value={subject.code}>{subject.code}</MenuItem>)
                                            }
                                            {
                                                this.state.labs.map((lab, i) =>
                                                <MenuItem value={"lab" + (i+1)}>Lab {i+1}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>5th Hour</InputLabel>
                                        <Select value={this.state.schedule[i].hour5} onChange={this.handleHour5.bind(this, i)} input={<Input />} >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.subjects.map((subject, i) =>
                                                <MenuItem value={subject.code}>{subject.code}</MenuItem>)
                                            }
                                            {
                                                this.state.labs.map((lab, i) =>
                                                <MenuItem value={"lab" + (i+1)}>Lab {i+1}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <FormControl margin="normal" style={{ width: '100%' }}>
                                        <InputLabel>6th Hour</InputLabel>
                                        <Select value={this.state.schedule[i].hour6} onChange={this.handleHour6.bind(this, i)} input={<Input />} >
                                            <MenuItem value=""><em>None</em></MenuItem>
                                            {
                                                this.state.subjects.map((subject, i) =>
                                                <MenuItem value={subject.code}>{subject.code}</MenuItem>)
                                            }
                                            {
                                                this.state.labs.map((lab, i) =>
                                                <MenuItem value={"lab" + (i+1)}>Lab {i+1}</MenuItem>)
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            )}
                    </Paper>


                    <Grid item align="center" xs={12}>
                        <Button raised color="primary" onClick={this.saveAndSubmit}>Save & Generate timetable!</Button>
                    </Grid>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <Typography type="body1" style={{color: 'gray'}}><CodeIcon />  by Abhishek Krishna in 2017 - 2018 | Version 0.24 (6th August 2018)</Typography>

                </footer>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;