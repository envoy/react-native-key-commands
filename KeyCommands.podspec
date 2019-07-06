require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "KeyCommands"
  s.version      = package['version']
  s.summary      = "iOS UIKeyCommand native component for React Native"
  s.license      = package['license']

  s.authors      = "Fang-Pen Lin <hello@fangpenlin.com> (https://fangpenlin.com)"
  s.homepage     = "https://github.com/envoy/react-native-key-commands#readme"
  s.platform     = :ios, "7.0"

  s.source       = { :git => "https://github.com/envoy/react-native-key-commands.git" }
  s.source_files  = "ios/**/*.{h,m}"

  s.dependency 'React'
end
