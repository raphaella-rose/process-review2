company makes digital audio workstation plugins 
musicians writing electronic music apply their filters to their tracks to change how they sound
today i need to write a band pass filter (works with frequencies, have a lower and upper limit, will set anything above/below inside the bassline given)


floats are accepted - frequencies are partial values
strings should raise an error
default for lower limit is 40 and default for upper limit is 1000

input => output
[music tracks], lower limit, upper limit => [amended music tracks]
[60,10,45,60,1500],20,50 => [50,20,45,50,50]
[60,10,45.5,60,1500],20,50 => [50,20,45.5,50,50]
[60,10,45,60,1500],20 => [60,20,45,60,1000]
[60,10,45,60,1500],50 => [50,40,45,50,50]
[], 20, 50 => error('no frequencies have been supplied')
['20', '40'], 20, 50 => error('input has been corrupted')

