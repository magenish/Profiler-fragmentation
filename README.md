# Profiler-fragmentation
Simple test code that show both profiler API and chrome dev tools profiler fragmentation issues 

This code creates a node server that return the jsprofiling  document policy header so we can run the profiler - see server.js
And return a simple html that use the profiler API to profile a 3 seconds consecutive JS function (named magenishCoolSleep) - see test.html

In order to make this work you will need to have node installed.

Then run “node server.js” from the folder and browse into http://localhost:1337/test.html from chrome.

Once the profiling is done we log into the browser console the profiler API output, you can easily see that some samples during the consecutive JS run are empty.
If you will use chrome dev tools profiler as well, you would see the same fragmentation.

Chrome Dev tools framgnatitoan:
![image](https://user-images.githubusercontent.com/53221799/146249628-30c6c195-8e1f-40fc-bae3-84618a7bf8ae.png)



Empty samples in the profielr API:
![image](https://user-images.githubusercontent.com/53221799/146249328-9038181e-ec29-4872-8d56-d05b5d567cfe.png)
