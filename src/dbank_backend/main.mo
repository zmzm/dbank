import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue : Float = 300;
  stable var startTime = Time.now();

  public func topUp(amount : Float) {
    currentValue += amount;

    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount : Float) {
    if (amount < currentValue) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Amount is to large.");
    };
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let ellapsedTimeNS = currentTime - startTime;
    let ellapsedTimeS = ellapsedTimeNS / 1000000000;

    currentValue := currentValue * (1.01 ** Float.fromInt(ellapsedTimeS));
    startTime := currentTime;
  };
};
