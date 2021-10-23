import ReactMarkdown from 'react-markdown';

export default function BuildGuide() {
const markdown = `
####Here we Go
So you decided to build android yourself? Nice.

First things First:

requirements#
There are some requirements to build Android ROMs.

As Stated by Google:

A 64-bit environment is required for Android 2.3.x (Gingerbread) and higher versions, including the master branch. You can compile older versions on 32-bit systems.
At least 250GB of free disk space to check out the code and an extra 150 GB to build it. If you conduct multiple builds, you need additional space.
If you’re running Linux, you need at least 16 GB of available RAM/swap.
A faster CPU will build faster, the more cores the better.

Another is something that I’d recommend, a fairly fast internet connection. ‘Cause we are gonna be downloading a lot of stuff later. (around 40 gigs)

I’m just gonna assume that you know what linux is and are using it. (either vm or install)

DISCLAIMER: We are going to be working in terminal most of the time. So if you are someone who fears the command line, leave now :)

setting build env#
First things first, lets setup the enviorment to be able to build at all. I’m gonna assume that you are using Debain/Ubuntu or a Derivative. If not, I suggest you use Ubuntu.

First, we are gonna update our system. To do that:

sudo apt update
sudo apt upgrade
After updating our system, let’s install git:

sudo apt install git
Enter your password and follow through. In the mean time, go and create a github account. (if you don’t have one already)

After installing git, let’s download a script that’ll setup the android build enviorment:

git clone https://github.com/akhilnarang/scripts
Let’s change directory into it:

cd scripts
Now, let’s execute the main script:

bash setup/android_build_env.sh
After that, just follow through what the script asks and when it’ll be done; your PC would be ready to build Android.

repo#
First we are going to download a tool called Repo made by Google. It alows us to manage multiple git repos all at once. Really nice tool.

So first

mkdir ~/bin
PATH=~/bin:$PATH
Then download it and make it executeable:

curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
chmod a+x ~/bin/repo
Repo is now installed and ready to use. (Note that repo only needs to be installed once, it’s not needed to do these steps if you’ve already done them once)

custom roms#
As for which ROM we are going to build? There is a great github repo that contains a list of Android ROMs along with their current version and status.

https://github.com/rokibhasansagar/Awesome-Android-OS-List
For starters, I’d recommend to build LineageOS. It’s both Fast and Stable.

Let’s create a directory for LineageOS:

mkdir ~/LineageOS
cd ~/LineageOS
manifest#
Now we open the manifest repo for LineageOS. A manifest is just a collection of the repositories that are needed for that specific project. If you look inside a manifest file, you’ll see:

Remotes (github, gitlab or specific users etc) basically where to get the repositories
Names of repositories along with their paths and branches.
That’s all.

Let’s look for LineageOS manifest. Go to LineageOS Github:

https://github.com/LineageOS
And open the “android” repository, LineageOS calls it’s manifest repo “android” but other roms may also call it manifest.

https://github.com/LineageOS/android
Here select the branch you want to build for. I’m going to name some of LineageOS branches with their Android version:

Lineage 14.1 (Android 7.1)
Lineage 15.1 (Android 8.1)
Lineage 16.0 (Android 9.0)
Lineage 17.1 (Android 10.0)
Lineage 18.1 (Android 11.0)
For this tutorial, we are going to use the Lineage 17.1 branch. After changing the branch to “lineage-17.1”, scroll down to README.mkdn file and look for command like:

repo init -u git://github.com/LineageOS/android.git -b lineage-17.1
This command tell’s the repo tool that we want to sync LineageOS and lineage-17.1 branch.

local manifest#
Now we add a local manifest to the .repo/local_manifest folder. This file is also a manifest but a custom one. It contains the device trees, kernel, vendor and also device specific stuff. You can create your own or use an already created one.

In this example, I’m going to use my own. First, I am going to create a folder for local manifests if not already there:

mkdir -p .repo/local_manifests
Now I am going to download and add my .xml manifest to the .repo/local_manifest directory. The manifest file can be named almost anything followed by a .xml in the end. For the sake of this tutorial, I am going to download the following file and place it into the .repo/local_manifests folder

https://github.com/itexpert120/local_manifests/blob/master/lineage-17.1.xml
syncing#
After doing that, we are going to download both the andriod source and device specific stuff together. To do that:

repo sync --force-sync -j$(nproc --all)
I’m gonna break this command down.

repo sync
This tells the repo command to sync/download the repos in manifests.

repo sync --force-sync
This option “–force-sync” tells the repo command to prioritize the local manifests over the main manifest file. If we don’t add that, we might experice errors saying duplicate repository.

repo sync --force-sync -j$(nproc --all)
This option “-j$(nproc –all)” tells repo to download in paralell using all the cores available to CPU, thus making it faster. The higher the cores in our CPU, the faster this command will be finished.

After initiating a repo sync, we wait for it to finish before proceeding.

getting ready to build#
I’m gonna go straight into it and explaining as we go, go to the ROM directory where we synced it:

source build/envsetup.sh
or:

. build/envsetup.sh
Here is the breakdown, we are telling the shell to use that file to setup the enviormental variables to be able to start the build. That’s all there is to it. You can use both the “source” and “.” to trigger that script.

the lunch command#
Now, let’s tell the build system about the device we want to build. To do that we use the lunch command:

lunch
You can use lunch like this and select from the list or go like this:

lunch lineage_fortuna3g-userdebug
If you go with just “lunch” then you’ll have to look for the product you want to build and give the index number to the command, or you can just type the product you want to build right after the lunch command.

I’m gonna break the product name:

“lineage” here is the name of the custom rom
“fortuna3g” is the name of device
“userdeubg” is the type of android build
There are three types of android builds, “user” “userdebug” and “eng”. The “user” type is used for stock roms by OEMs. The “eng” type build is used in initial builds for a device for debugging. The “userdeubg” type is generally used for Custom ROMs since it is both stable and can be used for little bit of debugging.

starting the build#
Now after we’ve specified the product, we wanna launch the build:

brunch fortuna3g
This will start the build for fortuna3g. Or we can go about the classic way of building it:

mka bacon -j$(nproc --all)
The brunch command is the same as lunch and mka bacon combined. If we are building lineage, it’ll build without any error (most of the time).

getting the zip#
After the build is done, you should see some completion message. To find your build, go to the following directory:

cd out/target/product
Here you’ll find a folder for your device and a compiled zip inside that folder along with other stuff, just copy that zip to your device and flash via TWRP.

You’ve successfully Compiled a ROM!
    `;
  
return ( 
      <div >
          <ReactMarkdown source = { markdown } />
      </div>
    )
}