let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

function solution(arg) {
    if (arg === "upvote") {
        this.upvotes += 1;
    } else if (arg === "downvote") {
        this.downvotes += 1;
    } else if (arg === "score") {
        let upvotes = this.upvotes;
        let downvotes = this.downvotes;
        let score = upvotes - downvotes;
        let totalVotes = upvotes + downvotes;
        let rating;
        if (totalVotes >= 10) {
            if ((upvotes / totalVotes * 100) > 60) {
                rating = "hot";
            } else if (score >= 0 && (upvotes > 100 || downvotes > 100)) {
                rating = "controversial"
            } else if (score < 0) {
                rating = "unpopular";
            } else {
                rating = "new";
            }
        } else {
            rating = "new";
        }
        let add = 0;
        if (totalVotes > 50) {
            add = Math.ceil(Math.max(upvotes, downvotes) * 0.25)
        }
        return [upvotes + add, downvotes + add, score, rating]
    }
}
// 87 %
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');      // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']