# seosomoon

react-native app 개발용 repo

# usage

[kkmjj](https://github.com/kkmjj)를 위한 지침

1. 관리할 프로젝트 폴더 안에서 git bash 오픈 후 다음 명령어를 입력한다.

    ```
    git clone https://github.com/WonHyun/seosomoon.git
    cd seosomoon
    ```

    clone을 완료하면 필요한 node js 모듈을 받기 위해 다음 명령어를 실행한다.

    > npm 또는 yarn이 설치되어 있는 경우

    ```
    npm install

    or

    yarn install
    ```

2. .keystone 추가

    현재 본 프로젝트에서 google map api를 사용하므로 api키를 등록해서 사용해야한다. 현재 쓰고있는 공용의 키가 있으므로 다음 지침에 따라서 사용할 수 있는 환경을 마련하자.

    다음 명령어를 cmd에 입력한다.

    ```
    keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android
    ```

    실행 후에 `C://Users/(Username)/.android` 경로에 `debug.keystone` 파일이 생성된다.

    그리고 cmd 화면에 생성한 키의 정보가 나오는데 그 중 `SHA-1` 정보를 복사해서 나에게 알려줄 것! (google api키에 등록하기 위해서)

    이 파일을 본 프로젝트의 `./android/app` 경로에 복사한다.

    keystone 파일은 .gitignore에 등록되어 있다.

3. keys.xml 추가

    google maps api key를 넣어준다. GCP에서 등록한 자신의 api key를 사용해도 되지만, [kkmjj](https://github.com/kkmjj)의 경우 제공한 공용의 키를 사용한다.

    해당 프로젝트의 `./android/app/src/main/res/values/` 경로에 `keys.xml`이라는 파일을 생성하고 다음과 같이 입력한다.

    ```xml
    <resources>
        <string name="google_maps_api_key">(key 값 입력)</string>
    </resources>
    ```

    이렇게 하고 저장하면 프로젝트를 사용할 준비가 되었다.

    `keys.xml` 또한 .gitignore에 등록되어 있다.