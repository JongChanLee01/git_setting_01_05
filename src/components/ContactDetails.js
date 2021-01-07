import React from 'react';

export default class ContactDetails extends React.Component{
    render() {

        //컨택트 됬을 때와 컨택트 안됐을 떄를 구분해야함
        const details = (
            <div>
                {/* 선택을 하지 않으면 오류가 나기 때문에 기본값을 정해주어야함. */}
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: '',
    }
}