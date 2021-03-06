import React from "react";
import "../Pages/Main.css";

class Feed extends React.Component {
  max_content_id = 0;
  state = {
    // 우선은 비어있는 상태
    comment: "", // 하나의 댓글
    comments: [] // 댓글들을 넣을 배열
  };

  handleComment = e => {
    console.log(e.target);
    this.setState({
      comment: e.target.value
    });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.comment) {
      // 만약 댓글이 있다면
      this.max_content_id += 1;
      this.state.comments.push({
        id: this.max_content_id,
        user: "hwanggee20",
        contents: this.state.comment
      });
    }
    console.log(this.state.comments[0]);
    this.setState({
      comment: ""
    });
    // this.setState({
    //   comment: e.target.value
    // });
  };

  render() {
    const commentsList = this.state.comments.map(reply => (
      <div className="commentSet" key={reply.id}>
        <span className="commentId">{reply.user}</span>
        <span className="commentContents">{reply.contents}</span>
      </div>
    ));
    console.log(commentsList);
    return (
      <div className="feed">
        <article className="article">
          <header className="feed_top">
            <div className="feed_TopProfileImg">
              <div className="feed_profileCanvas">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/82529786_2256971961263588_1343001445569396736_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qBvflOjpoGMAX91AOy-&oh=36108d820e5789db9c7cdb9997b51f36&oe=5ECAB835"
                  alt=""
                />
              </div>
            </div>
            <div className="feed_TopProfileId">
              <div className="profileId">dualipa</div>
              <div className="option">...</div>
            </div>
          </header>
          <div className="postImg">
            <img
              className="prostImgfile"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/82335513_564513697493069_2908991105388751765_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=9fUXKYFVltAAX-wfvWV&oh=0f334567291a1713afc6c407a5cfe67c&oe=5ED0C8FE"
              alt=""
            />
          </div>

          <div className="commentBox">
            <div className="comment_active">
              <div className="heart">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                />
              </div>
              <div className="comment">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  alt=""
                />
              </div>
              <div className="share">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  alt=""
                />
              </div>
              <div className="bookmark">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png
                    "
                  alt=""
                />
              </div>
            </div>
            <div className="likeBox">
              <div className="likeProfile">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/82529786_2256971961263588_1343001445569396736_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qBvflOjpoGMAX91AOy-&oh=36108d820e5789db9c7cdb9997b51f36&oe=5ECAB835
                  "
                  alt=""
                />
              </div>
              <div className="likeMessage">좋아요 39898개</div>
            </div>
            <div className="showComment">
              <div className="commentBox">
                <div className="commentSet">
                  <span className="commentId">dualipa</span>
                  <span className="commentContents">
                    10 MILLION VIEWS ON PHYSICAL MV!!!💝💝💝💝💝💝
                    yayayayaaaaaay‼️‼️‼️
                  </span>
                </div>
                <div className="commentSet">
                  <span className="commentId">carminido</span>
                  <span className="commentContents">
                    CONGRATSS💞 YOU DESERVE THE WORLD💖💞
                  </span>
                </div>
                <div>{commentsList}</div>
              </div>
            </div>
            <div className="reply_line"></div>
            <div className="replyComment">
              <form className="replyForm" action="submit">
                <input // input창에 뭔가를 입력했을 때 발생하는 이벤트. onChange
                  onChange={this.handleComment.bind(this)} // handleComment라는 함수가 실행된다.
                  className="replyInput"
                  type="text"
                  placeholder="댓글 달기..."
                  value={this.state.comment}
                />
                <button
                  onClick={this.handleSubmit}
                  className="replyBtn"
                  style={{ opacity: this.state.comment ? "1" : "" }}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Feed;
