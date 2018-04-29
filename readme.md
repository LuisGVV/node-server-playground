# Notes:

Simple pet project to try out deployment and other stuff

Process of adding SSH key:
1. Generate a key `$ ssh-keygen -t rsa -b 4096 -C 'lgvv06@gmail.com'`
2. Check ssh agent process is running `$ eval "$(ssh-agent -s)"`
3. Copy your public key to clip board `$ [copy-command] ~/.ssh/id_rsa.pub`
4. Test connection `$ ssh -T git@github.com`

Remember `$ git remote add origin [somerepo]`

- To start nodemon watching certain file extensions
    - `$ nodemon [filename] -e js,hbs`
- To debug with node debugging `$ node --inspect-brk [filename]`

## Express
- Remember express middleware order defines which is executed first

## Heroku CLI
- `$ heroku login` Username and pass
- `$ heroku keys` List ssh keys
- `$ heroku keys:add` Add ssh key
- `$ heroku keys:remove [emailAddress]` Add ssh key
- `$ ssh -v git@heroku.com` Test connection