import React from 'react'

const git = () => {
  return (
    <div>
{/* to rename branch: */}
- git branch -M rename
 -git push -u origin main

{/* *to create & switch new branch: */}
 -git checkout -b branchname

{/* * to create branch : */}
 -git checkout branchname

{/* * to delete branch: */}
  -git branch -d branchname  (branch delete garna xa vani next branch ma gayera balla delete garni. tei branch ma basera tei branch del hunnna)

		{/*git branch handa afule banako sab branch dekhinxa,sathile banayera fetch haneko branch herna all branch command use:git branch -a  */}

{/* * merge branch: */}
           {/* way 1. */}
		          merge 2 branches: -git merge branchname/main   (feature vanni branch ma basera main ma merge)
                                    -to compare commit,brnaches,files :git diff branch name

           {/* way 2. */}
		          pull req: -mero branch chai main sanga merge han vanera vanni request ani senior/owner accepts and remotely merge hunxa
			                -GitHub ma merge vayo tara locally merge vaxaina vani pull command use garni
			                -pull command is used fo fetch content from remote repo to local
 			                -git pull origin main


{/* *merge conflict:two branch ma eutai thauma chanes garayo vanigit unable to resolve so we manually solve. */}
 eg:btn add in 1 branch and dropdown add in another then git confuse
 -git merge main 
 conflict show garxa and k k lie add garxa tyo line hatauni .now button and dropdown same ma auda kun chahinxa tei rakhni

{/* *undoing changes */}
 1:staged changes 
  -git reset filename
  -git reset  (for multi)

 2:commit changes for 1 commit
  -git reset HEAD~1

 3:commit changhes for many commit
  -git log // shows all commit history whith hash
  -q // for quit

  -git reset commitHashPaste
  -git reset --hard commit hash // github ma matra haina vs code ma ni change hunxa
    </div>
  )
}

export default git
