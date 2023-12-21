// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "날씨도 추운데 일하느라 고생했다냥!" },
  { "number": 2, "message": "2는 원이가 제일 좋아하는 숫자다냥!" },
  { "number": 3, "message": "따뜻하고 행복한 연말 보내렴!" },
  { "number": 4, "message": "너도 나도 우리는 모두 특별한 사람이다냥!" },
  { "number": 5, "message": "크리스마스 때 뭐할지 정했니?" },
  { "number": 6, "message": "옷 따뜻하게 잘 껴입고 다녀!! 나는 감기 걸렸잖아~" },
  { "number": 7, "message": "같이 있을 때 행복한 사람이 있어? 그게 누구야?" },
  { "number": 8, "message": "그대는 핫팩 같은 사람이야~!" },
  { "number": 9, "message": "뒹굴뒹굴 누워서 보내는 것도 행복이지~" },
  { "number": 10, "message": "Happy Christmas, Harry. 해리포터에서 론이 크리스마스 되자마자 해리한테 이렇게 말한다!" },
  { "number": 11, "message": "나는 크리스마스에 볼 영화로 '브리짓 존스의 일기'를 추천해! 웃기고 재밌어!" },
  { "number": 12, "message": "행복 가득한 크리스마스 보내!" },
  { "number": 13, "message": "크리스마스 이브가 좋아? 아니면 크리스마스 당일이 더 좋아? 나는 이브!" },
  { "number": 14, "message": "빨강색 vs 초록색 무슨 색이 더 좋아? 나는 GREEN!" },
  { "number": 15, "message": "혹시 겨울 최애 음료 있어? 나는 따뜻한 밀크티를 참 좋아해!" },
  { "number": 16, "message": "다음 중 원이가 크리스마스에 만들 예정인 디저트는? 1.케익 2.티라미수 3.크림브륄레" },
  { "number": 17, "message": "오늘 베이스 치고 코딩 강의를 듣고 이 페이지를 만들었다! 뿌듯ㅋ" },
  { "number": 18, "message": "올해 마무리 잘하고 건강하게 새해를 맞이하자!" },
  { "number": 19, "message": "네가 웃으면 나도 좋아~" },
  { "number": 20, "message": "연말이니까 고마운 사람들에게 편지를 써보자!" },
  { "number": 21, "message": "올해 정말 고생많았어. 우리 모두 해냈다!" },
  { "number": 22, "message": "하루는 끝이 있지만 영원은 끝이 없어. 영원히 사랑해 쭈ㅎㅎ"},
  { "number": 23, "message": "너는 정말 예뻐 너는 정말 빛나~ 스스로를 많이 예뻐해주자!" },
  { "number": 24, "message": "여기까지 와주다니! 감동~ 올해 정말 고생많았고 내년에 하는 일 다 잘 됐으면 좋겠어! 그리고 좋아하는 것도 마음껏 좋아하는 해가 되었으면 해! 2024년 행복만 가득하길! 사랑해♡" }
];

