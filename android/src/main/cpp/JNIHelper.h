#pragma once

#include <fbjni/fbjni.h>
#include <jni.h>
#include <jsi/JSIDynamic.h>
#include <jsi/jsi.h>
#include <react/jni/CxxModuleWrapper.h>
#include <react/jni/JMessageQueueThread.h>
#include <react/jni/ReadableNativeArray.h>
#include <react/jni/WritableNativeMap.h>
#include <string>

namespace reanimated {

using namespace facebook::jni;
using namespace facebook;
using namespace react;

struct JNIHelper {
  struct PropsMap : jni::JavaClass<PropsMap, JMap<JString, JObject>> {
    static constexpr auto kJavaDescriptor = "Ljava/util/HashMap;";

    static local_ref<PropsMap> create();
    void put(const std::string &key, jni::local_ref<JObject> object);
  };

  static jni::local_ref<PropsMap> convertJSIObjectToJNIMap(
      jsi::Runtime &rt,
      const jsi::Object &jsiObject);

  static jsi::Object convertJNIMapToJSIObject(
      jsi::Runtime &rt,
      const jni::alias_ref<JMap<JString, JObject>> jniMap);
};

}; // namespace reanimated