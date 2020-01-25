import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import List from './List'
import { article } from '../../actions'


const mapStateToProps = state => {
    console.log(state)
    return { 
        article: state.article 
    }
}

const mapDispatchToProps = dispatch => {
    const { addArticle, deleteArticle, editArticle, saveArticle, buyItem } = article
    return bindActionCreators({ addArticle, deleteArticle, editArticle, saveArticle, buyItem }, dispatch)
}

const ArticleListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default ArticleListContainer
