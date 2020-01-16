1.0 Introduction

We live in a world where many people cannot achieve their life goals because the external conditions like poverty, geographical localization, socio-cultural issues, etc. had a negative influence on their lives. We live in a world where success is tied mostly to good education but the cost of access to it is too high. Although the Internet is an enormous repository of knowledge, this knowledge is often disorganized and dispersed, costly or there’s simply not enough motivation for people to get in front of the computer to learn. 
Mentee is going to change this because thanks to its attention to mentorship. We aim at fostering the relationship between mentees and mentors because mentorship is the next big thing that empowers people and has the potential to turn anyone in a leader.
 
“A mentor is someone who allows you to see the hope inside yourself” 
— Oprah Winfrey
Mentors not only share their knowledge and experience with others but through the relationship developed with their mentees they provide moral support and stimulate personal and professional growth. This relationship can push people to new heights and make them achieve things they wouldn’t be otherwise capable of. This is why they can have a real impact on the people and their lives.
The power of mentorship is always more appreciated within communities of a certain kind, academic field or corporate setting. Mentorship it is slowly gaining traction in today’s society as always more people look for mentors online. Also there are always more people willing to be mentors and look proactively for people to dedicate their time to.
People who have achieved success often say that their success would never be possible without certain people who acted as mentors in their lives.

2.0 The vision

Mentee platform, powered by the EOS.IO software, wants to be the place where mentees and mentors meet and exchange knowledge and acquire new experiences, where they can establish a connection and begin the mentorship, bringing mutual benefit to both. 
The ability to have access to different mentors makes Mentee a perfect solution for unlimited access to knowledge which is retained in the minds of many people. Each experience and each successful story is different and only those who succeeded know what needs to be done to get there. Using Mentee, these people have the opportunity to access this knowledge and to connect with others to be more successful. Thanks to Mentee they can have a real positive impact on someone’s life.
Mentee Network’s goal is to create the world’s first on-chain educational platform where learning courses and scientific content can be stored. Through an API it can be  accessed by different decentralized applications as a peer-reviewed and trustworthy source of information. 
Though the mentorship is the real focus of the platform the end result is a Curriculum Vitae. Official education and past working experiences matter but it isn’t always the proof of what a person really knows. Life experiences, undocumented works or courses make often a big part of someone’s personal kit. The successful entrepreneurs without higher education are proof that what we learn during our lives is often more valuable than the titles on the paper. Mentee will bring onto the surface all these skills showing employers what mentees really know which will be beneficial for both parties.
Mentee Network has the potential to become a school for entrepreneurs where they get the knowledge and experience from mentors, complete tasks, create and work in teams and deliver results. It benefits not only mentees but also mentors as, through mentoring,  they get to reflect on their own leadership style and methods, which can make them more thoughtful and intentional about own leadership. Mentee Network can be used as online classes where students and teachers meet.
There’s a reason why this app is built on the blockchain and this is because blockchain is an immutable ledger. Whatever new skill and progress will be achieved by the mentee, it will be recorded. This means that the CV will act as a certificate of the real knowledge and skills possessed that can be updated in real time as new information is added.

full whitepaper consultable at 

	http://mentee.network/wp-content/uploads/2019/11/MENTEE-WHITE-PAPER-.pdf


# Guide to Mentee development

# Intro
Mentee is a platform intended to be developed on top of EOSIO blockchain. Main components of Mentee will be written in C++ (smart-contracts) and the UI will represent a JS website that will display the state of the platform which is obtained from smart-contracts.

# Platform mechanics

Mentees will stake their MNT tokens and take to the platform to look for mentors with whom they will enter in contact through chat or a video conference. Mentees will also go through different courses created by other platform participants, quizzes and tests to check the level of their knowledge and visualize it on the CV diagram. All actions will take place and are processed in the EOSIO software. 
Mentees and mentors will get Menteepower from their mentorship activity and from creating courses and solving quizzes and tests. They will interact with the smart contract during platform activities thus they need to have a signed up EOSIO account.
Mentees and mentors will vote on courses, quizzes and tests to create a decentralized source of verified repository of educative material. Mentors will give mentees tasks to make them gain new skills and knowledge. A mentor will be also able to create a task for anyone to pick and he will then have the possibility to choose the best to join his team.
Platform's state is recorded and stored on the blockchain.
The platform process requires that information (platform state) be read from the smart-contract, as well as that user actions are converted into transactions and broadcasted to EOSIO network, thus sent to the smart-contract.

All the actions that a user can perform are invocations of various functions of the smart-contract which are performed by signing and sending transactions. This includes:

- creating personal profile

- placing "tasks" in the task queue (each mentee takes on tasks)

- giving tasks to a specific mentee (this is resolved by the mentor)

- voting

- creating courses, tests,quizzes

- opening groups

Every type of actions requires (1) a certain task to be placed and (2) a certain amount of time to complete.


# Resources
There are three resource types in the platform: CPU, NET, RAM.

The platform will take care of the CPU and NET. The RAM will be handled initially by the user. 

# Curriculum Vitae
CV is an arbitrary size 2D circular grid. Each cell represents a category. Each category may be filled with information (transactions about mentorship activity, completed tasks, courses, quizzes, certificates, attestations etc.) or not. Each user may have multiple mentors who contributed to his CV.

# Mentees
Mentees and mentors represent the main platform object. A mentee may have a mentor or it may be awaiting to be approved.

Mentee and mentor fill his profile with the following information:

- MNT stake, total MNT, available MNT, Mneteepower, Mentorpower (filled by the system)
- location
- eos account
- profession
- about me
- avatar
- education
- skills
- experience
- goals
- mentors
- mentees


Mentees and mentors both need to work on the development of the knowledge and skills to gain Menteepower and add to their CV.

# Token

MNT is used for:
- staking: Each mentor requires a minimum stake to open a group. Groups can be closed or public and each communication channel requires a minimum stake to get opened. When the channel is closed the stake is returned. Each time the group grows by 10 users a higher stake is required.
- slashing: During video calls users need to solve a puzzle to prove they're not bots. If they fail the staking period increses. If the same account will get slashed 3 times the stake will be confiscated. Slashing is applied also to voting. The slashing mechanism increases the staking lock-up period inversely proportional to the minority voting ratio.
The slashing ratio is calculated as follows:
(Total Majority Menteepower Votes - Total Minority Menteepower Votes) / (Total Menteepower Votes) = Slashing Ratio
- governance 
- fee for "scheduled meetings": each mentor will have the ability to create “scheduled meetings” to conduct their business activity directly from Mentee through video calls so they have no need for a brick-and-mortar office anymore and people save time on driving to places. “Scheduled meeting” works as an escrow. When the parties agree on the fee and time of their meeting, the mentee sends the agreed fee to the escrow contract. When the meeting ends both parties sign the transaction and the funds are released. Mentee platform collects a 2% fee for this activity.
- fee for tasks posting

## Menteepower
Menteepower is generated as a result of activities like:
- creating courses, quizzes, tests, tasks
- "live staking" during mentoring
- doing tasks/completing courses, tasks etc.
- voting on courses, quizzes, tasks, tests
Voting on course edit proposals will require a stake of MNT tokens for a period of 21 days. Voting up or down the course edit proposals stakes MNT for the amount of the vote. Proposing an edit stakes 50 MNT as an anti-spam measure.


# Actions

## Generate edu
A function called each time a user wants to create an educational course, quiz, test etc. It can be presented under the form of questions, videos, graphics, pictures, etc. Each time an edu is created it will be available for approval of other users. The more users voted on a specific edu, the more reliable the information contained in it is. The edu module is used to create
courses to be included in the database. Proposed tasks contain an IPFS (or dStor) hash time stamped on the blockchain. Staked MNT tokens are needed for edu creation. The user creates Menteepower for each successful edu.

## Edit edu
Edit edu function is called each time a user wants to edit an edu module. Each proposed change is a tuple object containing an IPFS hash pointing to the parent version as well as an IPFS hash pointing to the new version. Staked MNT tokens are
needed to propose the edits. The user creates Menteepower for each successful edu module edit. This creates a proportional amount of the MNT inflationary token reward allotted for content.

## Generate task
This function is called by the mentor in case she wants to create a specific task for a specific kind of mentee. In this sense, it can be used by an employer acting as a mentor who generates tasks for mentees as candidates for a workplace inside her business. The task meets a specific mentor’s need and is created with a specific purpose rather than being a general edu content. Staked MNT tokens are needed to generate a task.

## Complete task
The mentee needs to stake MNT tokens to accept a task created by a mentor. After the task is completed she’s rewarded with Menteepower.

## Live staking
Each public video communication channel has a “live staker”. The “live staker” mints Menteepower proportional to the time spent on active communication and to the stake. During the communication mentor and mentees will need to solve a puzzle with a timer appearing sporadically when the communication channel is open. If the puzzle won’t be solved on time it will be a sign that the participants are not involved in an active communication and the “live staking” rewards system is getting exploited. In that case, the communication will be closed and the stake will be subject to slashing. If the same account will get slashed 3 times the stake will be confiscated. When mentee and mentor close the channel the MNT stake is returned and Menteepower generated during the mentorship time is available for claim.
The “live staking” contract generates Menteepower at a rate of:
	
	2 Menteepower for each 100 MNT staked during 1 minute time

The contract sends 0.6 Menteepower to the Mentee foundation account and 1.4 Menteepower is sent to the mentorship communication participants on a pro-rata basis.



# Development instructions
We invite everyone to help building Menee platform to create a fully decentralized EOSIO based app.
Start by joining 

	https://t.me/menteenetdev on Telegram or https://join.slack.com/t/mentee-network/shared_invite/enQtODk0NjQ5NDIwNzI2LWE2MGUzMDJlMzQ4NmE1YzJiMDBhZWRlNDc1MTFiMTY1NTAxY2NlYzMzZWZiMmRmNDdlMjYzZThmMTNlNTBhMmI on Slack

At the current stage, we started building the front end in react (consultable here 

	https://menteenetwork.commoneffort.now.sh/#/ or here https://www.youtube.com/watch?v=CvB9wc7p_bA&feature=youtu.be).

We have also Scatter implementation that needs to get updated and connected to the user profile.
Mentee is planned to be built on the https://github.com/EveripediaNetwork code base and it will use https://github.com/qTox/qTox for communication, files transfer, groups, and screen sharing.
We want to use IPFSs or dStor as an off-chain storage solution.

## Educational courses
Use https://github.com/EveripediaNetwork/backend-api to build Generate edu, Edit edu, Generate task (see above). Everipedia's article module need to be transformed into module for educational courses, quizzes and tasks.

## User profile
Use https://github.com/EveripediaNetwork/backend-api to build user profile. It requires Scatter connection.
User profile needs to handle the following information:

- Balance detail: MNT stake, total MNT, available MNT, Mneteepower, Mentorpower
- eos account
- name
- profession
- about me
- avatar
- goals
- mentors
- mentees
- my courses
- my votes
- activity
- education
- skills
- experience
- detailed feedback from mentors and mentees
- character traits
Some data will be encrypted and stored off-chain on IPFS or dStore. The user will have the possibility to make these data publicly available or keep some of them private. 

We can use https://github.com/TokTok/c-toxcore to handle mentee-mentor connection requests.

## Token contract
The MNT token will use the same token contract as Everipedia https://github.com/EveripediaNetwork/Everipedia with the difference that instead of Brainpower the contract will mint Menteepower for the activities pertaining to mentees and mentors.  
Total MNT supply is 1B with an initial 5% inflation rate. Each time the contract mints 5 Menteepower, 1 Menteepower is minted and sent to the Mentee DAC account menteedac.x

A total of 500 MNT tokens are distributed as rewards every 30 minutes. The MNT rewards are split between editors who propose edits (80%) that are accepted and voters who vote with the majority (20%).  An individual MNT reward is determined in proportion to the total value of a user’s contributions. This includes:
	•	MNT staked for edits accepted on the network
	•	MNT staked for votes in the majority
For each edit proposal and course created, there is a set proportion of rewards given to the editor and the majority voters.  
If the user votes in the minority, his MNT tokens are not lost. Instead, those tokens are locked up for an extended period of time. 
For edit proposals, the time period is 12 hours (starting from the time the editor proposes the edit). Voting is based on a majority rule: if there are more ‘accept’ votes than ‘reject’ votes, the edit is incorporated into the course and stored on the network.
A rejected edit or vote against the majority means that the MNT tokens that the user used to propose an edit or make a vote will be locked up for a period of time that is proportional to the difference between the total number of votes in the majority and the minority.  This is called slashing.  After the lock-up period, the original MNT tokens will be returned to the account and will be available for future editing and voting.
Token contract needs to call additional function to enable "live staking". The “live staking” contract generates Menteepower at a rate of:
	
	2 Menteepower for each 100 MNT staked during 1 minute time

The contract sends 0.6 Menteepower to the Mentee foundation account and 1.4 Menteepower is sent to the mentorship communication participants on a pro-rata basis.

## Communication
We use https://github.com/qTox/qTox code base to build encrypted video communication, voice calls, and instant messagging. qTox is built from https://github.com/TokTok/c-toxcore. The Mentee platform should have all the functionalities of qTox. 

## Curriculum Vitae
CV data that will be stored directly on the blockchain will be public but there will be also some off-chain data that will be accessible by mentors or anyone else on demand. 
The CV example we aim for is below

![Image description](https://github.com/Commoneffort/mentee.network/blob/master/public/assets/images/blockchain%20cv.png)

## 
