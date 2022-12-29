# Git이란?

> 개발자의 코드를 효율적으로 관리하기 위해서 개발된 `분산 버전 관리 시스템 (DVCS)` 이다.

## 1. 버전 관리 시스템
![버전 관리 시스템의 필요성](https://velog.velcdn.com/images/tlsl13/post/1b863d85-de46-42c3-8fc1-eaf84cb58751/image.png)

최종.psd 진짜_최종.psd .. 대부분의 사람들은 이런 위 사진처럼 편집하기 전에 파일을 미리 복사해놓아 작업을 진행한다. 하지만 이렇게 파일을 편집할 때마다 매번 손수 복사하는 일을 번거롭기도 하고 실수할 가능성이 높다.

![버전 관리 시스템의 필요성2](https://velog.velcdn.com/images/tlsl13/post/8dcfbbf1-79ef-4050-8b37-61e6a15d69b7/image.png)

만약 여러 사람이 같은 파일로 동시에 작업하거나, 이전 상태로 다시 되돌려야 할 경우가 생긴다면 어디부터 손을 대야 할지 감을 잡기 힘들다. 이런 경우에 버전 관리를 할 수 있다면, 손쉽게 이전 상태로 돌아갈 수 있다.

### 버전 관리를 사용하는 이유
1. 파일이 변경되면 변경 이력을 저장할 수 있다.
2. 이전 버전으로 돌아갈 수 있다.
3. 어떤 변경 사항이 발생했는지 알아보기 쉽다.
4. 협업하기에 좋다.
5. 백업이 용이하다.

개발 프로젝트를 진행할 때, 이런 버전 관리를 돕는 시스템이 `깃(Git)` 이다.
<br>

## 2. Git의 장점
- **깃(Git)**은 인터넷이 연결이 되지 않은 곳에서도 개발을 진행할 수 있고, 분산 버전 관리이기 때문에 중앙 저장소가 삭제되어도 원상복구가 가능하다. 

- 각각의 개발자들이 `Branch` 를 사용하여 개발을 진행한 뒤, 본 프로그램에서 합치는 `merge` 방식을 통하여 병렬 개발이 가능하다.

![변경 이력](https://velog.velcdn.com/images/tlsl13/post/3a252cf2-37bf-4f1b-a91b-99844406fd73/image.png)

또 소스 코드가 어떤 부분이 어떻게 바꾸었는지 확인할 수 있다. 

`깃(Git)` 을 사용할 때 개발자의 현실적인 장점은 포토폴리오 관리에 용이하여, 자신이 작업한 프로젝트가 나열되어 있고 얼마나 주기적으로 프로젝트를 관리하고 있는 한눈에 확인이 가능하다.

<br>

## 3. Github
`Git` 은 소스 코드 기록을 관리하고 추적할 수 있는 버전 관리 시스템이라면 `Github` 는 Git Repository를 관리할 수 있는 클라우드 기반 서비스다.

즉, Git으로 버전을 관리하는 폴더에 대해서 Github를 통해 여러 사람들이 공유하고 접근할 수 있는 것이다.
한 마디로 개발자들의 SNS이다. Github에서 Code Review 등을 통해 협업이 가능하고, 수많은 오픈 소스 프로젝들이 Github로부터 호스팅되고 있어서, 누구든 자유롭게 기여할 수 있다.

![Github](https://velog.velcdn.com/images/tlsl13/post/402eee67-7ef5-4d24-9841-b78041aab0e6/image.png)

기존의 컴퓨터에서 작업하던 파일들이 있다고 가정할 때 만약 현재 나의 컴퓨터가 고장이 나거나 여러 상황을 대비하여 백업본을 저장해 둔다면 내 파일들을 복구시킬 수 있다. 

이때 여러 컴퓨터에서 내 파일들을 관리하기 위해서 다른 컴퓨터를 또 사용하는 것이 아닌, 나의 컴퓨터에서 Git으로 관리하는 프로젝트를 올려둘 수 있는 사이트다.

### Git Repository
`Git Repository` 는 저장소. 즉, 말 그대로 폴더를 저장해두는 곳이다.

![Git Repository](https://velog.velcdn.com/images/tlsl13/post/0b655aac-8dcc-4465-a0e9-9b9f2cd52c89/image.png)

**Git Repository의 두 종류 저장소**
- `Remote Repository` : 나의 PC에 저장되는 개인 전용 저장소
- `Local Repository` : 원격 저장소 전용 서버에 저장되는 저장소

작업할 때는 `Local Repository` 에서 할 수 있고, 내가 작업한 코드를 공유하려면 `Remote Repository` 에 업로드하여 여러 사람이 함께 공유할 수 있다.

다른 사람이 `Remote Repository` 에 올려놓은 소스 코드를 내 `Local Repository` 로 가지고 올 수 있다.
<br>

## 4. Git 기본 동작 및 용어
![Fork](https://velog.velcdn.com/images/tlsl13/post/1437264f-7a58-47d5-8ad8-a2a0bf19c0ad/image.png)

Remote Repository에 소스 코드가 올라와 있는데, 기여하고 싶은 오픈 프로젝트의 원격 저장소를 내 원격 저장소로 오는 작업을 `Fork` 라고 한다.

![Clone](https://velog.velcdn.com/images/tlsl13/post/f6439ea2-365d-4a0a-a58e-edcde022a2d8/image.png)

Fork를 하여 나의 Remote Repository에 코드를 옮겨온 상태인 것을 확인할 수 있다. 이때 이 코드를 수정하기 위해서는 내 컴퓨터로 가져오는 작업이 필요한데 이때, 그 과정을 `Clone` 이라고 한다.

![Push](https://velog.velcdn.com/images/tlsl13/post/7e039e11-cd5a-4ea4-8534-fd0d3f287c04/image.png)

현재 내 컴퓨터에 코드를 가져와 자유롭게 코드를 작성하여 이 파일을 다시 공유해주기 위해 Remote Repository에 올려주는 작업이 필요하다. 이때, 변경된 내용을 `Commit` 을 통해 저장해 준 뒤, `Push` 로 파일을 올려준다.

이렇게 `Push` 를 완료하고 나면 Github에는 `Pull request` 라는 기능이 있어 내가 제안한 코드 변경사항에 대해 반영 여부를 요청할 수 있다.

![pull](https://velog.velcdn.com/images/tlsl13/post/c717f311-b6cb-47c4-946d-20cbab3421b0/image.png)

`Push` 작업을 진행했을 때와 반대로 Remote Repository 에서 변경 사항이 있을 때, Local Repository 로 가져오는 작업을 `pull` 이라고 한다.

