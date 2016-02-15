'use strict';

import NavigationBar from './custom-views/react-native-navigationbar/index.js'
import StarRating from './custom-views/react-native-starring/StarRating.js'

import React, {
  View,
  ListView,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class TCListView extends React.Component {
  constructor(props) {
    super(props);
    var contentArray = [];

    for (var i = 0; i < 100; i++) {
      contentArray[i] = 'row' + i;
    }

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(contentArray), // 先初始化一个空的数据集合
      dataArray: contentArray,
      loadMore: false,
      isRefreshing: false,
    };
  }


  render () {
    return (
      <View style={styles.container}>

        <NavigationBar
          backHidden={true}
          actionIcon={true}
          barTintColor='rgb(248,248,248)'
          barStyle={styles.navbar}
          title='商户'
          backFunc={() => {
            this.props.navigator.pop()
          }}
          actionFunc={() => {
            console.log('actionFunc');
          }}
        />
        <View style={{height: 0.5, backgroundColor: 'rgb(234,234,234)'}}>
        </View>
        <ListView
          ref="listview"
          style={{overflow:'hidden'}}
          pageSize={10}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderSeparator={this._renderSeparator.bind(this)}
        />

      </View>

      // <View style={styles.container}>
      //   <Text style={{ textAlign:'center',  fontSize: 20, flexDirection: 'column',  width:100, height:100, lineHeight: 100/2 + 5, backgroundColor: 'blue'}}>
      //   {this.loadMore ? '有更多': '没有更多'}
      //   </Text>
      // </View>


    );
  }


  // 每一行cell创建之后就不会再进入此方法
  _renderRow (rowData, sectionID, rowID) {
    console.log('rowData = ' + rowData + ', sectionID = ' + sectionID + ', rowID = ' + rowID);
    return (
      <View style={styles.cell} >
        <Image
          style={styles.icon}
          source={smallImage}
          />
        <View style={styles.rightContent}>
            <View style={styles.rightTop}>
              <Text
                style={styles.title}>
                {rowData}
              </Text>

              <Image style={styles.hongIcon} source={require('./img/hongIcon.png')} />
            </View>
            <View style={styles.rightCenter}>
              <StarRating
                maxStars={5}
                rating={5}
                disabled={false}
                starSize={15}
              />
              <Text style={{flex: 1, marginLeft: 8, fontSize: 12 }}>
                ￥0.00/人
              </Text>
            </View>
            <Text style={styles.rightBottom}>杭帮/江浙菜 28.95m</Text>
        </View>
      </View>
    );
  }

_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
  console.log('sectionID = ' + sectionID + ', rowID = ' + rowID + ', adjacentRowHighlighted = ' + adjacentRowHighlighted);
  return (
    <View style={styles.separator} key={'SEP_' + sectionID + '_' + rowID}>
    </View>
  )
}
};

var smallImage = {uri: 'http://res.yuntaohongbao.com/E7DAAAEAE0E842DD6894E7414E14CC13.jpg'};

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  rightContent: {
    flex: 1,
    marginLeft: 8,
  },
  rightTop: {
    flex: 1,
    flexDirection: 'row',
  },
  rightCenter: {
    flexDirection: 'row',
    flex: 1,
    height: 20
  },
  rightBottom: {
    color:'darkgray',
    fontSize: 13,
  },
  cell: {
    margin: 8,
    height: 60,
    flexDirection: 'row',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 16,
    height: 16,
    // backgroundColor: 'green',
  },
  hongIcon: {
    marginLeft:8,
    width: 15,
    height: 15
  },
  separator: {
    flex: 1,
    height: 0.5,
    marginLeft: 8,
    backgroundColor: 'rgb(237,236,237)',
  },
});
