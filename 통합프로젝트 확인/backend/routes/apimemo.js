var express = require("express");
var router = express.Router();
const memos = require("../memo.json");
// 전체 추가된 메모의 갯수
let count = 2;

/* GET을 통해 메모를 보내줌 */
router.get("/", function (req, res, next) {
  console.log(memos);
  res.send(memos);
});

// get을 통해 id값이 동일한 메모를 보내줌
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  // m은 memos의 필터의 결과가 참인 객체들을 배열로 가져옴
  const m = memos.filter((memo) => {
    if (memo.id == id) {
      return true;
    }
  });
  res.send(m[0]);
});

// post를 통해 메모값을 받아옴 - axios
router.post("/", function (req, res, next) {
  const memo = req.body.data;
  count++;
  const m = {
    id: count,
    title: memo.title,
    memo: memo.memo,
    write: "익명",
  };
  memos.push(m);
  res.send("ok");
});

// post를 통해 메모값을 받아옴 - form
router.post("/writeform", function (req, res, next) {
  const memo = req.body;
  count++;
  const m = {
    id: count,
    title: memo.title,
    memo: memo.memo,
    write: "익명",
  };
  memos.push(m);
  // 다른 주소의 화면 출력
  res.redirect("/");
});

module.exports = router;
