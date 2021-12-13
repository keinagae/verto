### Operating System
> windows 10
### Node
> v14.17.4
### Yarn
> v1.22.11

##How to test and run
You will have to use yarn as it won't work with npm
First run below command to install dependencies

(Note) if it says after installation
if it says gyp error please look at next line

> yarn

If you had gyp error othere wise you can ignore it and move to next command \
gyp ERR! stack at C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\lib\\util.js:54:7\
gyp ERR! stack at C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\lib\\util.js:33:16\
gyp ERR! stack at ChildProcess.exithandler (child_process.js:326:5)\
gyp ERR! stack at ChildProcess.emit (events.js:376:20)\
gyp ERR! stack at maybeClose (internal/child_process.js:1055:16)\
gyp ERR! System Windows_NT 10.0.19042\
gyp ERR! command \"C:\\\\Program Files\\\\nodejs\\\\node.exe\" \"C:\\\\Program Files\\\\nodejs\\\\node_modules\\\\npm\\\\node_modules\\\\node-gyp\\\\bin\\\\node-gyp.js\" \"rebuild\"\
gyp ERR! cwd\
gyp ERR! node -v v14.17.0\
gyp ERR! node-gyp -v v5.1.0\
gyp ERR! not ok"\
then you can ignore this error and continue to next command


Now run following command to get build
> yarn build-bex

Once it completes you will have dist directory in got to
>./dist/bex/UnPackaged

there you have build of extension you can load it in to browser and test

