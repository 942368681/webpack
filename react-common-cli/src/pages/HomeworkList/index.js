import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import oStyle from './index.css';
import ajaxRequest from 'Utilities/ajax';
import { Button, Tree, Icon } from 'antd';
import logo from '../../common/img/logo.png';

const { TreeNode } = Tree;

@connect(
    state => ({
        data: state.workListReducer.a,
        treeData: state.workListReducer.treeData
    }),
    dispatch => ({
        change: num => dispatch(actions.changeNum(num))
    })
)
class HomeworkList extends React.PureComponent {
    state = {
        expandedKeys: [],
        autoExpandParent: true,
        checkedKeys: [],
        selectedKeys: []
    };

    componentDidMount() {
        console.log(this.props.data);
        console.log(this.props.treeData);
        this.testGetData();
    };
    
    async testGetData () {
        const {
            req1,
            req2,
            req3
        } = this;
        const mainDataArr = await Promise.all([
            req1(),
            req2(),
            req3()
        ]);
        console.log(mainDataArr);
    };

    req1 = () => {
        return ajaxRequest({
            method: 'GET',
            url: "https://api.github.com/users/sfl",
            useOwnUrl: true,
            data: {}
        });
    };
    req2 = () => {
        return ajaxRequest({
            method: 'GET',
            url: "https://api.github.com/users/kobe",
            useOwnUrl: true,
            data: {}
        });
    };
    req3 = () => {
        return ajaxRequest({
            method: 'GET',
            url: "https://api.github.com/users/curry",
            useOwnUrl: true,
            data: {}
        });
    };

    change = () => {
        const {change} = this.props;
        change(99);
    };

    onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        this.setState({
          expandedKeys,
          autoExpandParent: false
        });
    }
    
    onCheck = (checkedKeys) => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }
    
    onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    }
    
    renderTreeNodes = data => data.map((item) => {
        if (item.children) {
            return (
                <TreeNode title={item.title} key={item.key} dataRef={item} icon={<Icon type="smile-o" />}>
                    {this.renderTreeNodes(item.children)}
                </TreeNode>
            );
        }
        return <TreeNode {...item} icon={<Icon type="smile-o" />} />;
    });

    render () {
        console.log(this.props.data)
        return (
            <div>
                <img src={logo}/>
                <div className={oStyle.title}>作业列表</div>
                <Button type="primary" onClick={this.change}>click</Button>
                <Tree
                    checkable
                    showIcon
                    onExpand={this.onExpand}
                    expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    onCheck={this.onCheck}
                    checkedKeys={this.state.checkedKeys}
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                    showLine={true}
                    switcherIcon={<Icon type="down" />}
                >
                    {this.renderTreeNodes(this.props.treeData)}
                </Tree>
            </div>
        );
    };
}

export default HomeworkList;
