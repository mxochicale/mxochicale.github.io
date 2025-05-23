# :scientist: :unlock: :octocat: My open source website: [http://mxochicale.github.io/](http://mxochicale.github.io/)
[![Website](https://img.shields.io/badge/visit-website-blue.svg)](http://mxochicale.github.io/)
[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/) 

## :floppy_disk: Requirements and dependencies 
* Machine running GNU/Linux OS 
* Ubuntu dependencies (as I am a [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu) user): 
```
#In Ubuntu 20.04x64 onwards
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```

## :computer: Local development
1. Clone repo
```
mkdir -p $HOME/repositories/mxochicale && cd $HOME/repositories/mxochicale
git clone git@github.com:mxochicale/mxochicale.github.io.git
```
2. Change path
```
cd $HOME/repositories/mxochicale/mxochicale.github.io
```
3. Open two terminals: 
  * 3.1. to build the site:     
```
bundle exec jekyll serve
```
  * 3.2. to make it available on a local server.
```
firefox http://127.0.0.1:4000/ #or google-chrome http://127.0.0.1:4000/
```

## :books: References
* https://pages.github.com/
* https://jekyllrb.com/docs/installation/ubuntu/ 

## :speaking_head: Contact  
If you have specific questions about the content of this repository, you can contact [Miguel Xochicale](mailto:perez.xochicale@gmail.com?subject="[Website]"). 
If your question might be relevant to other people, please instead [open an issue](https://github.com/mxochicale/mxochicale.github.io/issues).
