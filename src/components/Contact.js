import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }
    handleClick(key) {
        this.setState({
            selectedKey: key
        });

        console.log(key, 'is selected');
    }
    
    render() {
        const mapToComponents = (data) => {
            //오름차순으로 할거기 때문에 파라미터 생략
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            //컴포넌트에는 onClick이 적용이 안됨. div, button같은 것만 적용됨
            //props로 전달이 되기 때문
            return data.map((contact, i) => {
                return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={()=>this.handleClick(i)}
                    />);
            });
        };
        
        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>

                {/* 사용자를 클릭 했을 때, 그 사용자를 아래 ContactDetails에 표시 */}
                <ContactDetails
                    isSelected={this.state.selectedKey != -1}
                    
                    //contactData의 배열에 selecteKey 
                    contact={this.state.contactData[this.state.selectedKey]}
                />
            </div>
        );
    }
}