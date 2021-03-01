const isKorean = navigator.language === "ko-KR";

if (isKorean) {
  document
    .getElementById("lang-select")
    .options[1].setAttribute("selected", true);
}

i18next.init(
  {
    lng: isKorean ? "ko" : "en",
    debug: true,
    resources: {
      ko: {
        translation: {
          about: "전시요약",
          gallery1: "제 1 전시관",
          gallery2: "제 2 전시관",
          gallery3: "제 3 전시관",
          gallery4: "제 4 전시관",
          title0: `0<br />미술이 <br />문학을<br />
          만났을 때`,
          description0: `1910년부터 1945년까지의 시기에 해당하는 일제 강점기는 통상적으로
          ‘암흑’의 시대, ‘절망’의 시대로 인식되어 왔다. 그래서 그 시대의
          역사를 들여다보는 일은, 아픈 상처를 들추는 것으로 그다지 유쾌하지
          않을 것이라는 선입견을 갖기 쉽다. 물론 식민지화된 국가의 일원으로
          살아간다는 것은 벗어날 수 없는 족쇄와 같이 근본적으로 모순된 사회
          구조를 견뎌내야만 하는 일이었다. 그러나, 그럼에도 불구하고, 이
          시대는 이전의 전통 사회와 지금의 현대 사회를 잇는 엄청난 변혁의
          시기로, 상상할 수 없이 빠른 속도로 신문화의 충격을 받아들이고
          흡수하고 튕겨냈던 ‘역동’의 시대였던 것도 사실이다. 빠른 속도로
          착륙한 서양의 새로운 사상, 철학, 지식, 그리고 문화가 이 시대의
          젊은이들을 자극했고, 또한 매료시켰다. <br /><br />이번 전시는
          1930-1940년대 경성이라는 시공간을 중심으로, ‘문학’과 ‘예술’에
          헌신하며 이 역설적인 시대를 살아 내었던 예술가들의 이야기를 담고
          있다. 이들은 프랑스의 에꼴 드 파리가 그러했던 것처럼, 다방과 술집에
          모여 앉아, 부조리한 현실을 거부하고, 새로운 시대 인식을 공유하며,
          함께 ‘지식의 전위’를 부르짖은 자유로운 영혼들이었다. 그리고 이들은
          어떠한 사회적 모순과 몰이해 속에서도, 문학과 예술의 가치를 믿고 이를
          함께 추구했던 예술가들 사이의 각별한 ‘연대감’을 통해서, 스스로의
          길을 개척해 나갈 추동력을 얻었다. <br />
          <br />한국 근대기 문학인과 미술인들이 함께 만들어낸 소중한 자산들을
          발굴하고 소개한 이번 전시를 통해, 비록 가난하고 모순으로 가득 찼던
          시대 한가운데에서도 정신적으로는 그 누구보다 풍요롭고 ‘귀족적’이었던
          예술가들의 멋진 신세계를 만나볼 수 있을 것이다.`,
          title1: `1<br />전위와 융합`,
          description1: `1934년 이상은 경성의 종로에 다방 ‘제비’를 열어 주변의 예술가들을
          불러들였다. 특별한 장식이 없이 ‘희멀쑥한 벽’에는 온통 누런색을 띈
          우울한 인상의 이상의 자화상과 그의 화우(畵友) 구본웅의 야수파 그림이
          걸려 있었고, 또 쥘 르나르, 장 콕토의 경구가 쓰인 액자가 붙어 있을
          뿐이었다. 그러나, 몇 개의 의자와 탁자가 가구의 전부인 이 초라한
          다방에서 예술가들은 미샤 엘만이 연주하는 바이올린 협주곡을 듣고,
          지금 막 명동의 영화관에서 개봉된 르네 클레르의 영화를 두고 열띤
          논쟁을 벌였다. <br /><br />1930년대는 지금 우리가 겪고 있는 수많은
          ‘현대성’의 징후들을 이미 모두 체험하고 흡수하고, 또한 거기에
          반응했던 시기였다. 빠른 속도로 들어오는 서양의 온갖 문화적 충격에
          직면하여, 가장 최첨단의 ‘전위(前衛)’에 자신을 위치시키고자 했던
          예술가들이 1부에서 소개된다. 이상, 박태원, 김기림 등 문인들과,
          구본웅, 황술조, 길진섭, 김환기, 유영국, 김병기 등의 화가들이
          야수파와 초현실주의, 다다와 추상에 이르기까지 유럽에서도 가장
          앞서갔던 전위적 양식을 함께 공유하고 공감하면서, 문학과 미술, 음악과
          영화 등 다양한 장르와 이질적인 문화가 혼종된 독특한 자신들의
          세계관을 구축해 갔다.`,
          title2: `2<br />지상(紙上)<br />
          의 미술관`,
          description2: `제 2 전시실에서는 1920-1940년대를 중심으로 한 ‘인쇄 미술’의 성과를
          보여준다. 3·1운동 이후 설립된 민간신문사를 중심으로 활동한 문인들과,
          당대 최고의 대중적 인기를 누렸던 신문소설의 삽화가들이 만나 이루어
          낸 특별한 ‘조합’의 결과물이 보여진다. 안석주, 노수현, 이상범,
          정현웅, 이승만, 김규택을 비롯하여 한 시대를 풍미했던 삽화가들의
          흔적을 풍부하게 만나볼 수 있다. 또한, 신문사의 자매지로 발간된
          잡지에서는 문인과 화가의 결합을 통해 아름다운 ‘화문(畵文)’이라는
          장르가 만들어졌는데, 이 시기 잡지를 통해 처음 발표된 시의
          원전(原典)과 독창적 감성으로 충만한 그림을 함께 감상할 수 있다.
          <br /><br />
          한편, 소설가 이태준이 “인공으로 된 모든 문화물 가운데 꽃이요 천사요
          영웅”이라고 표현했던, 근대기의 가장 아름다운 “책”들이 엄선되어
          전시된다. 윤동주도 필사해서 봤다는 100부 한정판 백석의
          『사슴』에서부터 김소월의 『진달래꽃』, 서정주의 『화사집』,
          윤동주의 『하늘과 바람과 별과 시』 등 당대 수많은 독자들을
          감동시켰던 책들의 원본을 감상할 수 있다.`,
          title3: `3<br />이인행각 (二人行脚)`,
          description3: `제 3 전시실에서는 1930-1950년대 문인과 화가들의 개별적인 관계에
          초점을 맞추었다. 종교를 매개로 절대적인 정신성의 세계를 추구했던
          시인 정지용과 화가 장발의 만남을 시작으로, 조선일보사 편집실의
          옆자리에 앉아 순박하고 아득한 시의 세계를 갈구했던 시인 백석과 당대
          최고의 장정가, 삽화가였던 정현웅의 조우를 확인할 수 있다. 또한
          조선일보의 사회부장과 신입 기자로 처음 만나 누구보다 지적이고 댄디한
          세계관을 공유하면서, 세계사적 흐름 위에서 조선의 당대적 위치를
          적확하게 가늠할 수 있었던 이여성과 김기림의 만남도 확인되며,
          마지막으로 일본 유학시절에 낭만주의적 예술관을 공유했다가 결국
          조선의 ‘옛 것’이 주는 아름다움에 심취했던 이태준과 김용준의 교유를
          만나볼 수 있다.

          <br /><br />
          또한, 이들의 유산을 계승한 다음 세대 예술가들의 작업이 본격적으로
          펼쳐진다. 시인 김광균을 시작으로 한 이미지즘의 세계, 즉 “시를 그림과
          같이, 그림을 시와 같이” 여겼던 다재다능한 ‘후예들’의 작품들이다.
          김광균, 김만형, 오장환, 이중섭, 구상, 이쾌대, 진환, 서정주, 김환기,
          이봉구, 조병화 등 시인과 화가들의 서로 얽히고설킨 관계망을 통해,
          한국 근대기 가장 아름다운 시와 그림이 탄생할 수 있었던 풍요로운
          문화적 토양을 짐작해 볼 수 있다.`,
          title4: `4<br />화가의 글·그림`,
          description4: `제 4 전시실에서는 일반적으로 화가로 알려져 있지만, 문학적 재능 또한
          남달랐던 예술가 6인의 글과 그림을 함께 보여준다. 『근원수필』의
          저자로, 소박하고 진솔한 수필가로 더욱 유명한 근원 김용준, 『강가의
          아틀리에』라는 수필집의 세계관에서 보이듯 언제나 단순하고 순수한
          것들의 아름다움을 찬미한 화가 장욱진, 많은 문학인들의 친구로, 평생
          자연과 산을 사랑했던 화가 박고석의 글과 그림이 각각 전시된다. 또한,
          따뜻한 시선으로 한국 전쟁 이후의 일상과 삶을 담아낸 한묵, 자전적이며
          인간 내면의 감정에 솔직한 수필로 더욱 대중적 사랑을 누렸던 천경자,
          마지막으로 1930년대부터 주요 잡지에 화문(畵文)을 싣기 시작하여
          그림만큼이나 감동적인 일기와 편지, 수필을 남겼던 화가 김환기의
          작업이 소개된다.

          <br /><br />
          이 전시실에서는 각각의 예술가들의 그림을 보는 공간과 글을 읽는
          공간이 별도로 마련되어 있다. 글과 그림을 모두 사랑했던, ‘두 개의
          뮤즈’를 지녔던 예술가들의 다채로운 면모를 함께 감상함으로써, 이들의
          내밀한 세계 속으로 더욱 가까이 접근할 수 있는 기회가 될 것이다.`,
          artno1: `모던 금강 만이천봉!, 표지: 황정수,<br />
          『별건곤』 제8권 제7호, 개벽사, 1933.7. <br />근대서지연구소 소장`,
          artno2: `구본웅, 인형이 있는 정물, 1937, <br />캔버스에 유채, 71.4×89.4cm,
          삼성미술관 리움 소장`,
          artno3: `이승만, 박종화의 「금삼의 피」 삽화, 1936,<br />
          종이에 수묵, 17×25.5cm, 개인 소장`,
          artno4: `김기림, 『기상도(氣象圖)』, 장정: 이상, 창문사, 1936,
          <br />화봉문고 소장`,
          artno5: `최재덕, 한강의 포플라 나무, 1940년대, <br />
          캔버스에 유채, 65×91cm, 개인 소장`,
          artno6: `이중섭, 시인 구상의 가족, 1955, <br />종이에 연필, 유채,
          32×49.5cm, 개인 소장`,
          artno7: `김용준, 기명절지 10폭 병풍, 1942, <br />
          비단에 채색, 각 폭 130.3×35.7cm, 개인 소장`,
          artno8: `김환기, <무제>, 1969-73, <br />
          캔버스에 유채, 86.5×60.7cm, 개인 소장 <br />
          ⓒ(재)환기재단·환기미술관`,
          time: `시간`,
          timeDescription: `화요일, 목요일, 금요일, 일요일(월요일 휴관) <br />10:00 ~ 18:00
          <br />
          수요일, 토요일 야간개장 <br />10:00 ~ 21:00`,
          address: `주소`,
          addressDescription: `서울시 중구 세종대로99(정동), 국립현대미술관 덕수궁(덕수궁 내)
          (우)04519 <br />
          TEL : 02-2022-0600 <br />
          FAX : 02-2022-0644`,
          fee: `관람료`,
          feeDescription: `별도 공지 시까지 무료 입장 (덕수궁입장료 별도)`,
          notice1: `※ 코로나19 확산 예방 및 관람객 안전을 위하여, 당분간 단체 예약을
          받지 않습니다. (단체예약 재개 추후 공지)`,
          notice2: `※ 휠체어 이용에 관한 문의는 02-2022-0640으로 전화 부탁드립니다.`,
          book: `전 시 예 약`,
        },
      },
      en: {
        translation: {
          about: "ABOUT",
          gallery1: "GALLERY 1",
          gallery2: "GALLERY 2",
          gallery3: "GALLERY 3",
          gallery4: "GALLERY 4",
          title0: `0<br />​Encounters Between <br />Korean Art and Literature <br />in the Modern Age`,
          description0: `In Korean history, the Japanese colonial period (1910–1945) has generally been viewed as an era of darkness and despair. As such, any attempt to examine the events of this time period are subject to preconceived notions of anger and aversion, like reliving a painful wound.<br /><br />
          Under colonial rule, of course, the people of Korea were continuously shackled by many contradictory social structures. But even so, this era was a period of profound transformation, during which time the traditional society of the past collided with the modern society of the present, with new cultures and technologies being accepted, absorbed, or repelled with unimaginable speed. In particular, young people became fascinated by a rapid surge of new ideas, philosophies, knowledge, and culture from the West.<br /><br />
          This exhibition shares the stories of artists and writers who devoted themselves to art and literature during this paradoxical era, focusing primarily on life in colonial Seoul (then known as Gyeongseong) in the 1930s and 40s. These cultural figures were free spirits who gathered in cafes and bars, condemned the absurdities of reality, promoted their own perception of a new era, and advocated the new avant-garde of knowledge, much like the École de Paris in France. Despite the overlying social contradictions and confusion, these artists and writers became a driving force, forming a deep solidarity as they cleared their own path through their shared belief in the abiding value of literature and art.<br /><br />
          Uncovering and introducing many invaluable assets of Korean heritage created through the joint efforts of writers and artists in the modern era, this exhibition opens the door to a thrilling new world of art and literature, celebrating the achievements of cultural pioneers who actively cultivated and shared their wisdom and nobility during a time of national crisis and contradiction.`,
          title1: `1<br /> Confluence of the Avant-garde`,
          description1: `In 1933, the poet Yi Sang opened Coffeehouse Jebi in Jongno, Gyeongseong, and began inviting artists to join him there for coffee and conversation. The interior of Coffeehouse Jebi was sparsely decorated, with blank, whitish walls that were almost unadorned, except for a rather gloomy self-portrait of Yi Sang in pallid colors, or a Fauvist-style painting by Yi's friend, the painter Gu Bon-ung. In another spot, a framed aphorism by Jules Renard or Jean Cocteau might be hung on the wall. But in this run-down cafe with only a few chairs and tables, artists gathered to hear a violin concerto by Mischa Elman or talk about the latest film by René Clair, which had just opened at a movie theater in Myeong-dong, the heart of the city. <br /><br />
          By the 1930s, many Koreans were just beginning to experience and absorb the elements of modernity that are now ubiquitous. This part of the exhibition introduces the Korean artists who sought to establish themselves as the "avant-garde" on the cutting-edge of society by eagerly embracing the latest trends of Western culture. Writers and artists such as Yi Sang, Park Taewon, Kim Gi-rim, Gu Bon-ung, Hwang Suljo, Gil Jinseop, Kim Whanki, Yoo Youngkuk, and Kim Byungki shared their views and appreciation of Europe’s leading art styles and movements of the time, from Fauvism to Surrealism, Dadaism, and abstract art. Through their joint efforts, such artists developed a unique worldview that integrated heterogeneous cultures and genres from literature, art, music, and film.`,
          title2: `2<br /> A Museum Built From Paper`,
          description2: `In the second gallery, Part II commemorates outstanding examples of visual art from print media of the 1920s, 1930s, and 1940s. In the 1920s, newspapers and magazines began to flourish in Korea, offering a much-needed platform for both writers and illustrators who had limited opportunities under colonial rule. Combining their efforts, these writers and illustrators fueled the enormous popularity of serial stories in newspapers, which attracted a huge readership. This fascinating chapter of Korean cultural history is revealed through original and reproduced works by famed illustrators such as Ahn Seokju, No Soohyeon, Lee Sangbeom, Jeong Hyeon-ung, Lee Seungman, and Kim Gyutaek. Meanwhile, some newspapers also published supplementary magazines featuring a marvelous new genre of illustrated writings called "hwamun (畵文)," showcasing the combined skills of writers and painters. Seeing the original text of the poems brought to life in beguiling illustrations, visitors can easily appreciate the enduring attraction of hwamun.<br /><br />
          Writer Lee Taejun once described books as "a flower, an angel, and a hero among cultural products." Reflecting this spirit, this section features a careful selection of some of the most beautiful books of the modern era, highlighted by a rare edition of Baek Seok's Deer, one of only 100 copies ever published. Other landmark publications on display include Kim Sowol's Azaleas, Seo Jeongju's Flower and Snake, and Yun Dongju's Sky, Wind, and Stars.`,
          title3: `3<br />Fellowship of Artists and Writers<br/>in the Modern Age`,
          description3: `Part III focuses on the individual relationships between writers and painters from the 1930s through 1950s, starting with the encounter between poet Jeong Jiyong and painter Chang Pal, who pursued a world of absolute spirituality through religion. This section also reveals the remarkable interactions between poet Baek Seok, who longed for the sincere and dreamlike world of poetry, and Jeong Hyeon-ung, the top book designer and illustrator of the time, who worked side-by-side in the editorial office of Chosun Ilbo newspaper. Chosun Ilbo was also the meeting place of Lee Yeoseong, the head of the Social Affairs Department, and Kim Gi-rim, a fledgling reporter, who combined their advanced intellects in diagnosing and delineating Korea's position within the flow of global events. Finally, while studying in Japan, Lee Taejun and Kim Yongjun shared a view of art that blossomed into a lifelong friendship based on the quaint beauty of Korea's traditional heritage.<br /><br />
          Building upon the legacy of such figures, the artists of the next generation (born in the 1910s) developed the sensibility of "seeing poems like paintings and reading paintings like poems," leading to the emergence of Imagism, led by poet Kim Gwang-gyun. Along with Kim Gwang-gyun, an intertwined network of poets and painters such as Kim Manhyung, Oh Jang-hwan, Lee Jungseop, Ku Sang, Lee Qoede, Jin Hwan, Seo Jeongju, Kim Whanki, Lee Bong-gu, and Jo Byeonghwa cultivated a rich cultural garden that produced some of the most beautiful poems and paintings of the modern era.`,
          title4: `4<br />Writings and Paintings <br />by Literary Artists`,
          description4: `Part IV showcases the writings and paintings of six artists who are known primarily as painters, but who also had exceptional literary talent. The six artists are Kim Yongjun, whose simple and genuine skills as an essayist are displayed in Essays by Kim Yongjun; Chang Ucchin, a painter who expressed his admiration for purity and simplicity not only in his childlike paintings, but also in his essay collection Atelier of the River; Park Kosuk, a painter who shared his love of nature and mountains with many literary friends; Han Mook, who warmly captured everyday life before and after the Korean War in his writings and paintings; Chun Kyungja, who became equally beloved for paintings and her candid autobiographical essays on human emotion; and Kim Whanki, who worked as an illustrator for major magazines starting from the 1930s and whose diaries, letters, and essays shine with the same touching spirit as his famous paintings.<br /><br />
          The gallery is divided into separate spaces for viewing the paintings and reading the writings of the respective artists. Taken together, the diverse and vibrant works reveal the intricate inner minds of these fascinating figures who were beholden to two muses, of both writing and painting.`,
          artno1: `12,000 Peaks of Modern Geumgang, cover illustration: <br />Hwang Jeongsu, Byeolgeongon (vol. 8, no. 7), July 1933,<br /> Institution of Modern Bibliography collection`,
          artno2: `Gu Bon-ung, Still Life with a Doll, 1937, <br />oil on canvas, 71.4 × 89.4 cm, Leeum, <br />Samsung Museum of Art collection`,
          artno3: `Lee Seungman, illustration for <br />Bak Jonghwa's Blood on the Silk Jacket, <br />1936, ink on paper, 17 × 25.5 cm, private collection`,
          artno4: `Kim Gi-rim, Weather Chart, book design by Yi Sang, <br />1936, Hwabong Books collection`,
          artno5: `Choi Jaideok, Poplar Trees on the Han River, <br />1940s, oil on canvas, 65 × 91 cm, private collection`,
          artno6: `​Lee Jungseop, Family of Poet Ku Sang, <br />1955, pen and oil on paper, 32 × 49.5 cm, private collection`,
          artno7: `Kim Yongjun, Ten-panel Folding Screen with Still Life, <br />1942, ink and color on silk, <br />each panel 130.3 × 35.7 cm, private collection`,
          artno8: `​Kim Whanki, Untitled, 1969–73, <br />oil on canvas, 86.5 × 60.7 cm, private collection ⓒWhanki Foundation·Whanki Museum`,
          time: `Time`,
          timeDescription: `Tuesday, Thursday, Friday, Sunday: 10:00 ~ 18:00<br/>
          Wednesday, Saturday: 10:00 ~ 21:00`,
          address: `Address`,
          addressDescription: `99 Sejong-daero, Jung-gu, Seoul 04519 <br /> TEL : +82-2-2022-0600(ARS switchboard)`,
          fee: `Admission Fee`,
          feeDescription: `Admission fee is charged differently according to the exhibition. Please refer to the museum website for details`,
          notice1: `※ For prevent of covid-19 and safety issues, we don’t take group reservations for now. `,
          notice2: `※ Please contact 02-2022-0640 for inquiries of using wheelchair.`,
          book: `B O O K I N G`,
        },
      },
    },
  },
  function (err, t) {
    // init set content
    if (err) {
      console.error(err);
    } else {
      updateContent();
    }
  }
);

function updateContent() {
  document.querySelector(".about").innerHTML = i18next.t("about");
  document.querySelector(".gallery1").innerHTML = i18next.t("gallery1");
  document.querySelector(".gallery2").innerHTML = i18next.t("gallery2");
  document.querySelector(".gallery3").innerHTML = i18next.t("gallery3");
  document.querySelector(".gallery4").innerHTML = i18next.t("gallery4");
  document.querySelector(
    "#section0 .content-container .title"
  ).innerHTML = i18next.t("title0");
  document.querySelector(
    "#section1 .content-container .title"
  ).innerHTML = i18next.t("title1");
  document.querySelector(
    "#section2 .content-container .title"
  ).innerHTML = i18next.t("title2");
  document.querySelector(
    "#section3 .content-container .title"
  ).innerHTML = i18next.t("title3");
  document.querySelector(
    "#section4 .content-container .title"
  ).innerHTML = i18next.t("title4");

  document.querySelector(
    "#section0 .content-container .description"
  ).innerHTML = i18next.t("description0");
  document.querySelector(
    "#section1 .content-container .description"
  ).innerHTML = i18next.t("description1");
  document.querySelector(
    "#section2 .content-container .description"
  ).innerHTML = i18next.t("description2");
  document.querySelector(
    "#section3 .content-container .description"
  ).innerHTML = i18next.t("description3");
  document.querySelector(
    "#section4 .content-container .description"
  ).innerHTML = i18next.t("description4");

  document.querySelector(".artno1").innerHTML = i18next.t("artno1");
  document.querySelector(".artno2").innerHTML = i18next.t("artno2");
  document.querySelector(".artno3").innerHTML = i18next.t("artno3");
  document.querySelector(".artno4").innerHTML = i18next.t("artno4");
  document.querySelector(".artno5").innerHTML = i18next.t("artno5");
  document.querySelector(".artno6").innerHTML = i18next.t("artno6");
  document.querySelector(".artno7").innerHTML = i18next.t("artno7");
  document.querySelector(".artno8").innerHTML = i18next.t("artno8");

  document.querySelector(".time").innerHTML = i18next.t("time");
  document.querySelector(".time-description").innerHTML = i18next.t(
    "timeDescription"
  );
  document.querySelector(".address").innerHTML = i18next.t("address");
  document.querySelector(".address-description").innerHTML = i18next.t(
    "addressDescription"
  );
  document.querySelector(".fee").innerHTML = i18next.t("fee");
  document.querySelector(".fee-description").innerHTML = i18next.t(
    "feeDescription"
  );
  document.querySelector(".notice1").innerHTML = i18next.t("notice1");
  document.querySelector(".notice2").innerHTML = i18next.t("notice2");
  document.querySelector(".reservation").innerHTML = i18next.t("book");
}

i18next.on("languageChanged", () => {
  updateContent();
});
