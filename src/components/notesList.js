import React from 'react'

export default class notesList extends React.Component {
    renderNotes(){
        const notes = Object.values(this.props.notes) // this gets all the values of notes as an array

        return notes.map((n) => <div><h2>{n.title}</h2>
                                    <p>{n.body}</p>
                                </div>);
    }

    render() {
        return <div>
            {this.renderNotes()}
        </div>
    }
}