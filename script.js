var images = [
    "BhaskarKrishnan.png",
    "Sister.png",
    "Father.png",
    "Mother.png",
    "Grandfather.png",
    "Grandmother.png"
];
var member = [
    "Its me",
    "My sister",
    "My Father",
    "My Mother",
    "My Grandfather",
    "My GrandMother"
];
var members_name = [
    "Bhaskar Krishnan",
    "Swati Krishnan",
    "Shiv Ratan Krishnan",
    "Ritu Krishnan",
    "Sitaram Krishnan",
    "Bimla Devi Krishnan"
];
var i = 1;
function update()
{
    i++;
    var number_of_members=5
    if(i>number_of_members)
    {
        i=0;
    }
    var updateImage=images[i];
    var updatemember=member[i];
    var updatename=members_name[i];
    document.getElementById("family_image").src=updateImage;
    document.getElementById("family_member").innerHTML=updatemember;
    document.getElementById("family_member_name").innerHTML=updatename;

}