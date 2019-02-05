import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default class Loop extends Component {

    list = [
        {id: Math.random(), title: "Camaro", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: Math.random(), title: "Viper", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {id: Math.random(), title: "Mustang", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    ]

    render() {
        return (
            <RenderCard list={this.list}/>
        )
    }
}

const RenderCard = ({list}) => ( //recebe a lista de itens como parametro
    <Content>
        {list.map(item => (
               <Card key={item.id}>
               <CardItem>
                 <Left>

                   <Body>
                     <Text>{item.title}</Text>
                   </Body>
                 </Left>
               </CardItem>
             </Card>
        ) )}
    </Content>
)

