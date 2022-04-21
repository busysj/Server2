<template>
  <div class="about">
    <h1>메모</h1>
    <!-- 13. 저장된 memo 출력 -->
    <table v-for="(memo, i) in memo" :key="i">
      <tr>
        <td>{{ memo.id }}</td>
        <td>{{ memo.writer }}</td>
        <!-- title을 클릭했을 때 pageview 화면으로 넘어감 -->
        <!-- 보여지는 화면은 Vue의 화면이기에 뷰컴포넌트와 라우터가 존재해야함 -->
        <td @click="$router.push(`/about/${memo.id}`)">{{ memo.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
/*
  (2) about링크를 눌렀을 때 AboutView 컴포넌트 호출
  (3) axios를 통해서 백엔드(/api/memo)에 http 객체로 request 보냄
*/
export default {
  // 11. 뷰 컴포넌트가 실행(생성)될 때마다 아래 함수를 실행하기 위함
  // created() 함수에 작성
  created() {
    // 메모값을 vue가 생성될 때 들고옴
    // axios는 fetch와 사용법 유사
    // 주소 "/api/memo"로 get메소드로 request를 보냄
    this.$http.get("/api/memo").then((response) => {
      // fetch의 then과 같음
      // response가 오면 실행
      console.log(response.data);
      // 12. response값을 memo에 저장
      this.memo = response.data;
      /*
        (6) memo.js에서 보내준 memos의 값을 response를 통해 전달받음
      */
    });
  },
  data() {
    return {
      memo: [],
    };
  },
};
</script>
