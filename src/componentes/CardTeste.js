import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
export default class CardTeste extends Component {
  render() {
    return (
      <Container>
        <Header />
        
        <Content style={{margin:10}}>
           
            <Card >
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'}} style={{height: 200, width: 500}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          
         
        </Content>
      </Container>
    );
  }
}