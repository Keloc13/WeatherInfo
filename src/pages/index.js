import React from 'react'
import NoteList from '../components/notesList'


 class indexPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
                  <h1>Notes</h1>
                <NoteList notes={this.props.notes}/>
            </div>
    }
}

export default indexPage