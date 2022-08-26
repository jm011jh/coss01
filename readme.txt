스타일시트는 전처리기 scss를 사용하였습니다.

아래의 스크립트/스타일시트는 전체페이지에 적용입니다.
css/public.css

/js/jquery.js
/js/public.js

아래의 요소들은 바디의 최 하단에 삽입해주세요
.
.
...
    <div id="header"></div>
    <div id="footer"></div>
</body>

board.html 의 게시글(.info--wrap-body2-boardList)은 최대 10개까지입니다.
게시글이 10개 미만일 경우 .info--wrap-body2-boardIndex는 출력되지 않도록 해주세요.

board2a.html
게시물에 첨부파일이 있으면 .info--wrap-body2a-download 이 요소를 활성화해주시고 파일은 .info--wrap-body2a-download a 요소로 삽입해주세요. 파일이름은 해당 a요소 안의 p요소에 출력되게 해주세요
게시물에 답변이 달려있으면 .info--wrap-body2a-reply 이 요소를 활성화해주시고 .info--wrap-body2a-reply-body p에 내용을 출력해주세요.
게시물에 답변이 달려있으면 .info--wrap-body2a-foot-buttonWrap 안의 '답변하기'버튼은 없애주세요.
게시물에 답변이 달려있으면 .info--wrap-body2-reply-true를 활성화해주세요. 반대의 경우 info--wrap-body2-reply-false를 활성화해주세요

게시물에 답변이 없을 시 .info--wrap-body2a-foot-buttonWrap 안의 '답변하기'버튼을 활성화해주세요.
또한 해당 버튼을 클릭할 경우 .info--wrap-body2a-foot-buttonWrap는 잠시 없애고 .info--wrap-body2a-foot-form를 나타나게 해주세요.
게시물에 답변이 없을 시 .info--wrap-body2a-reply는 없애주세요

infoSide.html의 메뉴 중 해당 메뉴로 이동한 경우 해당 a요소에 now 클래스를 부여해주세요.