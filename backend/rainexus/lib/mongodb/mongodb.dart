import 'package:mongo_dart/mongo_dart.dart';

class Mongodb {
  static late Db db;

  static connect({required String dbName}) async {
    db = await Db.create("MONGODB_CONN_STRING");
    await db.open().then((value) => print("*** Database Connected ***"));
    print(db.runtimeType);
  }
}
