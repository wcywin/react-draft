import React from "react";
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomOption];
        alert(option);
    };
    handleAddOptionParent = (option) => {
        if (!option) {
            return 'Enter a valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    render() {
        const title = Header.title;
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOptionParent={this.handleAddOptionParent}
                />
            </div>
        );
    }
}

// export default class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handlePick = this.handlePick.bind(this);
//         this.handleAddOptionParent = this.handleAddOptionParent.bind(this);
//         this.handleDeleteOption = this.handleDeleteOption.bind(this);
//         this.state = {
//             options: []
//         };
//     }
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('options');
//             const options = JSON.parse(json);
//
//             if (options) {
//                 this.setState(() => ({ options }));
//             }
//         } catch (e) {
//             // Do nothing at all
//         }
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.options.length !== this.state.options.length) {
//             const json = JSON.stringify(this.state.options);
//             localStorage.setItem('options', json);
//         }
//     }
//     componentWillUnmount() {
//         console.log('componentWillUnmount!');
//     }
//     handleDeleteOptions() {
//         this.setState(() => ({ options: [] }));
//     }
//     handleDeleteOption(optionToRemove) {
//         this.setState((prevState) => ({
//             options: prevState.options.filter((option) => optionToRemove !== option)
//         }));
//     }
//     handlePick() {
//         const randomOption = Math.floor(Math.random() * this.state.options.length);
//         const option = this.state.options[randomOption];
//         alert(option);
//     }
//     handleAddOptionParent(option) {
//         if (!option) {
//             return 'Enter a valid value to add item'
//         } else if (this.state.options.indexOf(option) > -1) {
//             return 'This option already exists'
//         }
//
//         this.setState((prevState) => ({
//             options: prevState.options.concat(option)
//         }));
//     }
//     render() {
//         const title = Header.title;
//         const subtitle = 'Put your life in the hands of a computer';
//
//         return (
//             <div>
//                 <Header title={title} subtitle={subtitle}/>
//                 <Action
//                     hasOptions={this.state.options.length > 0}
//                     handlePick={this.handlePick}
//                 />
//                 <Options
//                     options={this.state.options}
//                     handleDeleteOptions={this.handleDeleteOptions}
//                     handleDeleteOption={this.handleDeleteOption}
//                 />
//                 <AddOption
//                     handleAddOptionParent={this.handleAddOptionParent}
//                 />
//             </div>
//         );
//     }
// }