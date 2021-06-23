export const BUY_TICKET = 'BUY_TICKET';


export default function reducer(state = {}, action) {
    switch (action.type) {
        case BUY_TICKET:
            return {
                ...state,
                id: action.id,
                expired: action.expired,
                start_date: action.start_date,
                end_date: action.end_date,
                qr_code: action.qr_code,
                party_id: action.party_id,
                user_id: action.user_id
            }
        default:
            return state;
    }
}


class ScrollingList extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        if (prevProps.list.length < this.props.list.length) {
            const list = this.listRef.current;
            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        // (snapshot here is the value returned from getSnapshotBeforeUpdate)
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }

    render() {
        return (
            <div ref={this.listRef}>{/* ...contents... */}</div>
        );
    }
}