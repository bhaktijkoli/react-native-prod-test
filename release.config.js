module.exports = {
    "branches": ["main"],
    "plugins": [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        [
            "semantic-release-react-native", {
                "skipIos": true,
                "versionStrategy": {
                    "android": {
                        "buildNumber": "increment",
                        "preRelease": true
                    }
                }
            }],
        [
            "@semantic-release/exec",
            {
                "prepareCmd": "bundle exec fastlane android build"
            }
        ],
        [
            "@semantic-release/git", {
                "assets": [
                    "android/app/build.gradle",
                    "CHANGELOG.md",
                    "package.json"
                ],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        [
            "@semantic-release/github", {
                "assets": [
                    { "path": "android/app/build/outputs/apk/release/app-arm64-v8a-release.apk" },
                    { "path": "android/app/build/outputs/apk/release/app-armeabi-v7a-release.apk" },
                    { "path": "android/app/build/outputs/apk/release/app-x86_64-release.apk" },
                    { "path": "android/app/build/outputs/apk/release/app-x86-release.apk" },
                    { "path": "android/app/build/outputs/apk/release/app.apk" },
                ]
            }]
    ]
}
