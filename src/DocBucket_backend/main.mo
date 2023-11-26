import Hashmap "mo:base/HashMap";
import Time "mo:base/Time";
import Result "mo:base/Result";
import Principal "mo:base/Principal";
import Int64 "mo:base/Int64";
import Float "mo:base/Float";
import Hash "mo:base/Hash";
import Nat "mo:base/Nat";



actor {
    
    public type Time = Time.Time;
    public type Profile = {
        name : Text;
        stream : Text;
        registration_no : Nat;
        cgpa : Float;
        degree : Text;
        passout_year : Nat;
    };


    
    // Create a  new profile and store it inside the hashmap : the Key is the nat of the caller and the Value is the Profile submited.
    let users : Hashmap.HashMap<Nat, Profile> = Hashmap.HashMap<Nat, Profile>(1,Nat.equal,Hash.hash);


    // Create. Caller is the principal of the caller
    public shared func create_profile(user : Profile) : async () {
        users.put(user.registration_no, user);
        return;
    };

    // Read. Optional type needed.
    public query func read_profile(reg : Nat) : async ?Profile {
        return(users.get(reg));
    };

    public shared ({caller}) func test() : async Principal{
        return(caller);
    };



    //Delete.
    public shared({caller}) func delete_profile(reg : Nat) : async Result.Result<(), Text> {
        switch(users.remove(reg)){
            case(null) {
                return #err("There is no profile for user with Registration  No. " # Nat.toText(reg));
            };
            case(?user){
                return #ok();
            };
        };
    };

    
} 